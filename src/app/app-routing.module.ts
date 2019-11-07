import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { AppComponent } from './app.component';
import { BookdetailsComponent } from './components/books/bookdetails/bookdetails.component';


const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: '', component: AppComponent },
  {path:'book/:id',component:BookdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [BooksComponent,AppComponent]
