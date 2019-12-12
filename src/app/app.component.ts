import { Component,OnInit } from '@angular/core';
import {AppServiceService} from './service/app-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private appService:AppServiceService){} 
  cardDetails= [];
  ngOnInit(){
       this.appService.getCardDetails().subscribe((data:any[])=>{
         console.log(data);
         this.cardDetails = data;
       });
  }
}
