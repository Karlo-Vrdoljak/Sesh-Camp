import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestService } from './services/test.service';
import { TestComponentComponent } from './test-component/test-component.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { Config } from 'src/environments/config';
import {CarouselModule} from 'primeng/carousel';
import { StorageServiceModule } from 'angular-webstorage-service'
import { NgxUiLoaderModule, NgxUiLoaderService, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { AppHttpInterceptor } from './services/httpInterceptor';
import { ErrorHandler } from './services/errorHandler';
 
import { ToastrModule } from 'ngx-toastr';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#b0b0b1',
  fgsColor: '#b0b0b1',
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.chasingDots, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
};

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    SidebarModule,
    MenubarModule,
    NgxUiLoaderHttpModule.forRoot({... ngxUiLoaderConfig, showForeground: true}),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    CarouselModule,
    ToastrModule.forRoot({
      preventDuplicates:true,
      countDuplicates: true,
      progressBar:true,
      progressAnimation: "decreasing",
      positionClass:"toast-bottom-left"
    })
  ],
  providers: [
    TestService,
    NgxUiLoaderService,
    { 
      provide: LocationStrategy,
      useClass: HashLocationStrategy 
    },
    Config,
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
    ErrorHandler


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
