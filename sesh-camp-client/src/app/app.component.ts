import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Config } from 'src/environments/config';
import { SPINNER } from 'ngx-ui-loader';

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
  ) {
    // SPINNER.rectangleBouncePulseOutRapid
  }
  
  public get SPINNER() {
    return SPINNER;
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
