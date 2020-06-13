// import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';



// @Injectable({
//   providedIn: 'root'
// })

// export class CharacterService {
//   constructor(
//     private firestore: AngularFirestore
//   ) {}
//   //Crea un nuevo gato
//   public createCat(data: {nombre: string, url: string}) {
//     return this.firestore.collection('campana').add(data);
//   }
//   //Obtiene un gato
//   public getCharacters(id:string) {
//     return this.firestore.collection('campana').doc(id).valueChanges();
//   }
// }
