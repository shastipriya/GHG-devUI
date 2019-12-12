import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }
  public getAuthorDetails(){
    return this.http.get('../../../assets/articleAuthor.json');
}
}
