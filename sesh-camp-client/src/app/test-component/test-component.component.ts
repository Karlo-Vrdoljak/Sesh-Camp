import { Component, OnInit, Inject } from '@angular/core';
import { TestService } from '../services/test.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ErrorHandler } from '../services/errorHandler';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  message:any;
  user: any;
  constructor(
    public testService: TestService,
    private ngxLoader: NgxUiLoaderService,
    public errorHandler: ErrorHandler,
    @Inject(LOCAL_STORAGE) public storage: WebStorageService
  ) { }

  ngOnInit() {
    this.testService.testNestJSApi().subscribe(data => {
      console.log(data);
      
    });
    this.testService.getToken({ username: 'user', password: 'user' }).subscribe(data => {
      let auth = {...data};
      this.storage.set('auth',auth);
      console.log(auth);
      this.testService.testNestJWT().subscribe((data:any[]) => {
        this.user = data[0];
        console.log(this.user);
        
        this.message = data[1];
        
      },err => {
        this.errorHandler.handleError(err);
      }
      , () => { });
    });
    
  }

}
