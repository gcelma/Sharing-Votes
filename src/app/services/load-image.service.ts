import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { CargaComponent } from '../components/carga/carga.component';
import { FileItem } from '../models/file-items';

@Injectable({
  providedIn: 'root'
})
export class LoadImageService {

  private CARPETA_IMAGENES = 'img';

  constructor( private db: AngularFirestore) {}

    loadImagesFirebase( imagenes: FileItem[] ) {
    console.log( imagenes );
    }

  private guardarImagen ( imagen: { nombre: string, url: string}) {
  this.db.collection(`/${ this.CARPETA_IMAGENES }`)
      .add( imagen );
}
  }
