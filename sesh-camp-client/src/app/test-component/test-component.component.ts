import { Component, OnInit, Inject } from '@angular/core';
import { TestService } from '../services/test.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ErrorHandler } from '../services/errorHandler';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

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
    public storage:LocalStorageService
  ) { }

  ngOnInit() {
    this.testService.testNestJSApi().subscribe(data => {
      console.log(data);
      
    });
    this.testService.getToken({ username: 'admin', password: 'admin' }).subscribe(data => {
      let auth = {...data};
      console.log(auth);
      this.storage.set('auth',auth);
      this.testService.testNestJWT().subscribe((data:any[]) => {
        this.user = data[0];
        console.log(this.user);
        
        this.message = data[1];
        
      },err => {
        this.errorHandler.handleError(err);
      }
      , () => { });
    }, err => this.errorHandler.handleError(err)
    , () => { });
    
  }

}
