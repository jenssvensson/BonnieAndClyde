import { ImageService } from './../common/image.service';
import { Component, OnInit } from '@angular/core';
import { Image } from '../common/Image.model';
import { Subscription } from 'rxjs';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  
  images: Image[];
  subscription: Subscription;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.getImageData();
  }

  getImageData() {
    this.subscription = this.imageService.getImages().subscribe(
      images => {
        this.images = images;
      }
    );
  }
}
