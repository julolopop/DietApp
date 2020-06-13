import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserData } from '../_interface/user-data';



@Injectable({
  providedIn: 'root'
})

export class CampaniaService {
  constructor(
    private firestore: AngularFirestore
  ) {}
  //Obtiene un gato
  public getCampanas() : Observable<UserData> {
    // return this.firestore.collection('Usuarios').doc(JSON.parse(localStorage.User).user.uid).valueChanges();
    return this.firestore.collection('user').doc<UserData>('nDnMNYrOdPW5C4Q3Z8QxkV4SZFJ2').valueChanges();
  }

  public setCampanas(data:UserData) {
    // return this.firestore.collection('Usuarios').doc(JSON.parse(localStorage.User).user.uid).valueChanges();
    this.firestore.collection('user').doc('nDnMNYrOdPW5C4Q3Z8QxkV4SZFJ2').set(data);
  }
}
