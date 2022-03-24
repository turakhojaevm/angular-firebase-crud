import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private angularFire: AngularFirestore) { }

  create_Newemployee(Record: any) {
    return this.angularFire.collection('Employee').add(Record);
  }


}
