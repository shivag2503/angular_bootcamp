import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {

  url: string;

  constructor(private photoService: PhotosService) {
    this.fetchPhotos();
   }

   onClick() {
    this.fetchPhotos();
   }

   fetchPhotos() {
    this.photoService.getPhoto().subscribe((response) => {
      this.url = response.urls.regular;
    });
   }

  ngOnInit(): void {
  }

}
