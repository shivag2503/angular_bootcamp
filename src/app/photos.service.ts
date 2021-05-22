import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Photo {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get<Photo>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID 3zifIe-bYGRIlr6wDrC1uEXq7sgkI_O8-YyrsLJByMc'
      }
    });
  }
}
