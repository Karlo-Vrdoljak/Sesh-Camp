import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { FileUpload } from "primeng/fileupload/fileupload";
import { Music } from "../types/music";
import { MusicService } from "../services/musicService";
import { ErrorHandler } from "../services/errorHandler";
import { Config } from "src/environments/config";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { Track, MatAdvancedAudioPlayerComponent } from "ngx-audio-player";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-upload-music",
  templateUrl: "./upload-music.component.html",
  styleUrls: ["./upload-music.component.css"]
})
export class UploadMusicComponent implements OnInit {

  @ViewChild("fp") FileUploader: FileUpload;

  sizeOpts = [5,10,20];
  payload: File;
  music: Music[];
  index = -1;
  playlist: Track[];
  constructor(
    public musicService: MusicService,
    public errorHandler: ErrorHandler,
    public config: Config,
    public ngxService: NgxUiLoaderService,
  ) {}

  ngOnInit(): void {
    this.musicService.getAllMusic().subscribe((data: Music[]) => {
      this.music = data.map(song => {
        song.playlistIndex = ++this.index;
        return song;
      });
      this.index = -1;

      this.playlist = this.music.map(song => {
        const track = new Track();
        track.title = song.originalname;
        track.link = this.config.API_URL_ROOT + song.filename;
        return track;
      });
    },err => this.errorHandler.handleError(err)
    , () => {  });
  }

  onUpload(event) {
    this.payload = event.files[0];
    this.uploadToApi().then(() => {
      this.FileUploader.clear();
      this.payload = null;
    });
  }

  uploadToApi() {
    return new Promise(resolve => {
      this.musicService.uploadMusic(this.payload).subscribe(
        data => {
          resolve();
        },
        err => this.errorHandler.handleError(err),
        () => {}
      );
    });
  }
}
