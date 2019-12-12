import { Component, OnInit } from '@angular/core';
import { GetBookListService } from './book-service/get-book-list.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookList:GetBookListService) { }
  booksDetails = [];
  page = 1;
  pageSize  = 10;
  bookLength = 0;
  ngOnInit() {
    
    this.bookList.sendBookList().subscribe((data:any[])=>{            
      this.booksDetails = Object.keys(data).map(function(index){
        return data[index];
      });
      this.bookLength = this.booksDetails.length;
      console.log(this.booksDetails);
    });
  }
  

}
