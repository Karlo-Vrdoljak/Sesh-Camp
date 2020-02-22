import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  message:any;

  constructor(
    public testService: TestService,
    private ngxLoader: NgxUiLoaderService
  ) { }

  ngOnInit() {
    this.ngxLoader.start();
    
    this.testService.testNestJSApi().subscribe(data => {
      this.message = data;
      this.ngxLoader.stop();
    });
  }

}
