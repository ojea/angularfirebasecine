import { Injectable } from '@angular/core';

//IMPORTAMOS LOS MODULOS PARA TRABAJAR CON FIRESTORE
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

//IMPORTAMOS EL MODELO
import { Cine } from '../models/Cine';

@Injectable({
    providedIn: 'root',
  })

  export class PostService {
  constructor(private angularFirestore: AngularFirestore) {}

  //CREAMOS LOS METODOS PARA MOSTRAR LOS DATOS

  getItems(): Observable<any[]> {
    return this.angularFirestore.collection('cine').valueChanges();
  }

//   getSeriesPeliculas() {
//     return this, this.angularFirestore.collection('cine').snapshotChanges();
//   }

//   getSeriePeliculaById(id) {
//     return (
//       this, this.angularFirestore.collection('cine').doc(id).valueChanges()
//     );
//   }
}