import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
 import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule,RoutingComponents } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// ********************** angular-modal-gallery *****************************
import 'hammerjs'; 
import 'mousetrap'; 
import { GalleryModule } from '@ks89/angular-modal-gallery'; 
// **************************************************************************



@NgModule({
  declarations: [
    RoutingComponents,
    HeaderComponent,
    FooterComponent           
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,    
    HttpClientModule,
    AngularFontAwesomeModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    GalleryModule.forRoot()
  ],
  providers: [],
  bootstrap: [HeaderComponent]
})
export class AppModule { }
