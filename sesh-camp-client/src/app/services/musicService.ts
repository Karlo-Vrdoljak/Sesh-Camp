import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Config } from "src/environments/config";

@Injectable({
  providedIn: "root"
})
export class MusicService {
  constructor(public http: HttpClient, public config: Config) {}

  uploadMusic(params: File) {
    const formData: FormData = new FormData();
    formData.append("music", params, params.name);
    return this.http.post(this.config.API_URL_ROOT + "music/upload", formData);
  }

  getAllMusic() {
    return this.http.get(this.config.API_URL_ROOT + "music/", {});
  }
}
