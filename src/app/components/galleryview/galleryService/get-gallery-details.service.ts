import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetGalleryDetailsService {

  constructor(private http:HttpClient) { }
  
  public getGalleryDetailById(id){
   // var text = data'+id;
      return this.http.get('../../../assets/data'+id+'.json');
  }

}
