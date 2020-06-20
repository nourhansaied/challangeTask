import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  @Input() images;
  constructor() {

  }

  ngOnInit(): void {
  }
  change(e) {
    let selecteItem = e.target.src;
    let currentIndex = this.images.findIndex(i => i.thumbnail == selecteItem);
    let backup = this.images[currentIndex]
    this.images[currentIndex] = this.images[0];
    this.images[0] = backup

  }
}
