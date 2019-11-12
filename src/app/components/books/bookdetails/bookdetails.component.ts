import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetBookDetailsService } from '../book-service/get-book-details.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private bookDetails:GetBookDetailsService) {}
  bookInfo:any;
  bookContent:string;
  ngOnInit() {
    this.bookDetails.getBookDetailById(this.route.snapshot.params.id).subscribe((data:any) =>{
      this.bookInfo = data;
      console.log(data);
      this.bookContent = data.bookDesc;
    });
  }
  openFlipBook(response) {
    //const fileURL = URL.createObjectURL(response);
    window.open('https://online.flippingbook.com/view/539120/');
 }
 downloadFile(data: any) {
  var blob = new Blob([data], { type: 'application/pdf' });
  var url = window.URL.createObjectURL(blob);
  saveAs(blob,'ghg');
  //window.open(url);

}
downloadBook(bookName){
  this.bookDetails.downloadBookById(bookName)
      .subscribe(
          (data) => this.downloadFile(data)), 
          (error) => console.log("Error downloading the file."),
          () => console.info("OK");
}
}
