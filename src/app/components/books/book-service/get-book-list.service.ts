import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetBookListService {

  constructor(private httpClient: HttpClient) {
   }

  public sendBookList(){
    return this.httpClient.get('http://localhost:7777/books/list');
   }
}
