import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../../models/file-items';
import { LoadImageService } from '../../../services/load-image.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  imageFiles: FileItem[] = [];

  constructor( public _loadImages: LoadImageService) { }

  ngOnInit() {
  }

  cargarImagenes() {
     this._loadImages.loadImagesFirebase( this.imageFiles );
  }
}
