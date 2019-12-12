import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetBookListService {

  constructor(private httpClient: HttpClient) {
   }

  public sendBookList(){
    console.log("thanksdaddy");
    return this.httpClient.get('../../../assets/BookList.json');
   }
}
