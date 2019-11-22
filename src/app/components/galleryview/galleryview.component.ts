import { Component , OnInit} from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { GetGalleryDetailsService } from './galleryService/get-gallery-details.service';

import {
  GalleryService,
  Image,
  GridLayout,
  PlainGalleryConfig,
  PlainGalleryStrategy,
  AdvancedLayout
} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-galleryview',
  templateUrl: './galleryview.component.html',
  styleUrls: ['./galleryview.component.css']
})
export class GalleryviewComponent implements OnInit{

  constructor(private galleryService: GalleryService, private sanitizer: DomSanitizer,private galleryDetails:GetGalleryDetailsService) {}
  imageIndex = 1;
  galleryId = 1;
  isPlaying = true;
  page = 1;
  pageSize  = 12;
  width = '24%';
  imageData: any [] =[];

  plainGalleryGrid: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.GRID,
    layout: new GridLayout({ width: this.width, height: 'auto' }, { length: 4, wrap: true })
  };

  images: Image[] = [ ];
  autoUpdateImage(data) {
    console.log(data);
    this.images = [];
   var count = 0;
    for (let entry of data) {     
      const newImage: Image = new Image(count, {  img: entry.srcUrl}, { img:entry.srcUrl });
      count = count + 1;     
      this.images = [...this.images, newImage];
    }     
  }
  ngOnInit(){
    this.galleryDetails.getGalleryDetailById(1).subscribe((data:any) =>{
      this.imageData = data;
      this.autoUpdateImage(data);
    });
 
  }
  nextPage(page){
    this.galleryDetails.getGalleryDetailById(page).subscribe((data:any) =>{
      this.autoUpdateImage(data);
    });
  }
  customPlainGalleryRowConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };
  openImageModalRow(image: Image) {
    console.log('Opening modal gallery from custom plain gallery row, with image: ', image);
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new AdvancedLayout(index, true) });
  }
  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }
  
}

