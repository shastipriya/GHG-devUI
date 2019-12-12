import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../service/author.service';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(private authorList:AuthorService) { }
  authors = [];
  page = 1;
  pageSize  = 10;
  authorLength = 0;
  ngOnInit() {
    this.authorList.getAuthorDetails().subscribe((data:any[])=>{            
      this.authors = Object.keys(data).map(function(index){
        return data[index];
      });
      this.authorLength = this.authors.length;
      console.log(this.authors);
    });
  }

}
