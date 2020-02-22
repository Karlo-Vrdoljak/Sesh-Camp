import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Config } from 'src/environments/config';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  config:Config;

  constructor(
    public http: HttpClient,
  ) { 
    this.config = new Config();
  }

  testNestJSApi() {
    return this.http.get(this.config.API_URL_TEST, {});
  }
  
}
