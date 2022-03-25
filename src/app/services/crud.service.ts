import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private angularFirestore: AngularFirestore) { }

  create_Newemployee(Record: any) {
    return this.angularFirestore.collection('Employee').add(Record);
  }

  get_Appemployee() {
    return this.angularFirestore.collection('Employee').snapshotChanges();
  }

  update_employee(recordid: any, record: any) {
    this.angularFirestore.doc('Employee/' + recordid).update(record);
  }

  deleteRecord(recordId: any) {
    this.angularFirestore.doc('Employee/' + recordId).delete();
  }


}
