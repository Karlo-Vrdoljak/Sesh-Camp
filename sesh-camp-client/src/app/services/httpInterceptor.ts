
 import { Injectable } from '@angular/core'; //TRIBA OTKOMENTIRAT
 import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
 import { Observable } from 'rxjs';
 import { ActivatedRoute, Router } from '@angular/router';
 import { Config } from '../../environments/config';

 @Injectable()
 export class AppHttpInterceptor implements HttpInterceptor {
     config: Config;
     constructor() {
         this.config = new Config();
     }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(localStorage.getItem('auth')) {
            let data =  JSON.parse(localStorage.getItem('auth')); 
            req = req.clone({ setHeaders: { 'Authorization': 'Bearer ' + data.access_token } });
        }
        // req = req.clone({ params: req.params.set('appVersion', '0.9') });
        return next.handle(req);
  }
 }