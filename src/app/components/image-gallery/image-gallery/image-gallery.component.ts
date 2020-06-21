import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  @Input() images;
  public width: any;
  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.width = this.sanitizer.bypassSecurityTrustStyle(`calc(100% / ${this.images.length})`)
  }


  change(e) {
    let selecteItem = e.target.src;
    let currentIndex = this.images.findIndex(i => i.thumbnail == selecteItem);
    let backup = this.images[currentIndex]
    this.images[currentIndex] = this.images[0];
    this.images[0] = backup

  }
}
