import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ArticleService } from './service/article.service';
import { AuthorService } from './service/author.service';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private articleDetails:ArticleService,private authorDetails:AuthorService,config: NgbAccordionConfig) {
    config.closeOthers = false;
   }
  articles = [];
  pageInfo:any;
  ngOnInit() {
    this.authorDetails.getAuthorDetails().subscribe((data:any) =>{
      this.pageInfo =  data.find(x => x.articleAuthorId == this.activatedRoute.snapshot.params.id);
      this.articleDetails.getArticle().subscribe((article:any) =>{
       
        this.articles.push(article.filter(a =>a.articleAuthorId == this.activatedRoute.snapshot.params.id));        
        this.pageInfo.articles = this.articles[0];        
      });
    });
  }
}
