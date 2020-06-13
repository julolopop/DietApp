// import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';



// @Injectable({
//   providedIn: 'root'
// })

// export class CharacterInfoService {
//   constructor(
//     private firestore: AngularFirestore
//   ) {}
//   //Crea un nuevo gato
//   public createCat(data: {nombre: string, url: string}) {
//     return this.firestore.collection('pj').add(data);
//   }
//   //Obtiene un gato
//   public getinfoCharacters(id:string) {
//     return this.firestore.collection('pj').doc(id).valueChanges();
//   }
//   //Actualiza un gato
//   public setinfoCharacters(documentId: string, data: any) {
//     return this.firestore.collection('pj').doc(documentId).set(data);
//   }
// }
