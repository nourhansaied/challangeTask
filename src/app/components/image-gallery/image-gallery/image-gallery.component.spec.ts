import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGalleryComponent } from './image-gallery.component';

describe('ImageGalleryComponent', () => {
  let component: ImageGalleryComponent;
  let fixture: ComponentFixture<ImageGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageGalleryComponent]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ImageGalleryComponent);
        component = fixture.componentInstance;
      })
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
