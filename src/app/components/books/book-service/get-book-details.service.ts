import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetBookDetailsService {

  constructor(private http:HttpClient) { }
  
  public getBookDetailById(id){
      return this.http.get('http://localhost:7777/book/'+id);
  }
  // public downloadBookById(fileName): Observable<Blob>{
  //   return this.http
  //   .get('http://localhost:7777/books/download/'+fileName, {
  //     responseType: "blob"
  //   });
    
  // }
  public downloadBookById(fileName): any {
    return this.http.get('http://localhost:7777/books/download', { headers: new HttpHeaders({      
      'Content-Type': 'application/json', 'Accept': 'application/pdf'
    }), responseType: 'arraybuffer'})
  }

 
}
