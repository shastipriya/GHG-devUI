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
  bookContent : String = ' <p>Do You Control Your Phone — <strong>Or Does Your Phone Control You?</strong> Within a few years of its unveiling, the smartphone had become part of us, fully integrated into the daily patterns of our lives. Never offline, always within reach, we now wield in our hands a magic wand of technological power we have only begun to grasp. But it raises new enigmas, too. Never more connected, we seem to be growing more distant. Never more efficient, we have never been more distracted. </p> <br/>  <p>Do You Control Your Phone — Or Does Your Phone Control You?Within a few years of its unveiling, the smartphone had become part of us, fully integrated into the daily patterns of our lives. Never offline, always within reach, we now wield in our hands a magic wand of technological power we have only begun to grasp. But it raises new enigmas, too. Never more connected, we seem to be growing more distant. Never more efficient, we have never been more distracted. </p>  <br/> <p>Do You Control Your Phone — Or Does Your Phone Control You?Within a few years of its unveiling, the smartphone had become part of us, fully integrated into the daily patterns of our lives. Never offline, always within reach, we now wield in our hands a magic wand of technological power we have only begun to grasp. But it raises new enigmas, too. Never more connected, we seem to be growing more distant. Never more efficient, we have never been more distracted. </p>  <br/> <p>Do You Control Your Phone — Or Does Your Phone Control You?Within a few years of its unveiling, the smartphone had become part of us, fully integrated into the daily patterns of our lives. Never offline, always within reach, we now wield in our hands a magic wand of technological power we have only begun to grasp. But it raises new enigmas, too. Never more connected, we seem to be growing more distant. Never more efficient, we have never been more distracted. </p>'
  ngOnInit() {
    this.bookDetails.getBookDetailById(this.route.snapshot.params.id).subscribe((data:any[]) =>{
      console.log(data);
    });
  }
  downloadBook1(response) {
    //const fileURL = URL.createObjectURL(response);
    window.open('https://online.flippingbook.com/view/539120/');
 }
 downloadFile2(data: any) {
  var blob = new Blob([data], { type: 'application/pdf' });
  var url = window.URL.createObjectURL(blob);
  saveAs(blob,'ghg');
  //window.open(url);

}
downloadBook(bookName){
  this.bookDetails.downloadBookById(bookName)
      .subscribe(
          (data) => this.downloadFile2(data)), 
          (error) => console.log("Error downloading the file."),
          () => console.info("OK");
}
}
