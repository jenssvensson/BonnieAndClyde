import { IMAGES } from './image-data';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getImages() {
    return from([IMAGES]);
  }
}
