import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Config } from 'src/environments/config';
import { SPINNER, POSITION } from 'ngx-ui-loader';
import { ErrorHandler } from './services/errorHandler';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'sesh-camp-client';
  display:boolean = false;
  items:MenuItem[];

  constructor(
    public config:Config,
    public errorHandler: ErrorHandler,
  ) {
    // SPINNER.rectangleBouncePulseOutRapid
  }
  
  public get SPINNER() {
    return SPINNER;
  }

  public get POSITION() {
    return POSITION;
  }
  
  ngOnInit(): void {
    this.items = [
      {
        label: null,
        icon:'pi pi-arrow-right',
        command: () => this.display = true
      }
    ];
  }
}
