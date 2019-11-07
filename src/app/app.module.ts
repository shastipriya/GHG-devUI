import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule,RoutingComponents } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookdetailsComponent } from './components/books/bookdetails/bookdetails.component';


@NgModule({
  declarations: [
    RoutingComponents,
    HeaderComponent,
    FooterComponent,
    BookdetailsComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HeaderComponent]
})
export class AppModule { }
