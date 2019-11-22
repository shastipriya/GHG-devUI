import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { AppComponent } from './app.component';
import { BookdetailsComponent } from './components/books/bookdetails/bookdetails.component';
import { GalleryviewComponent }  from './components/galleryview/galleryview.component'

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: '', component: AppComponent },
  {path:'books/:id',component:BookdetailsComponent},
  {path:'gallery',component:GalleryviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [BooksComponent,AppComponent,BookdetailsComponent,GalleryviewComponent]
