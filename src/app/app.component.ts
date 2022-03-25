import { Component, OnInit } from '@angular/core';
import { CrudService } from "./services/crud.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  employee!: any[];
  employeeName!: string;
  employeeAge!: undefined;
  employeeAddress!: string;
  message!: string;

  constructor(private crudService: CrudService) {
  }

  ngOnInit() {
    this.crudService.get_Appemployee().subscribe(data => {
      this.employee = data.map(e => {

        return {
          id: e.payload.doc.id,
          isEdit: false,
          // @ts-ignore
          name: e.payload.doc.data().name,
          // @ts-ignore
          age: e.payload.doc.data().age,
          // @ts-ignore
          address: e.payload.doc.data().address,
        }
      });
    });
  }

  CreateRecord() {
    let Record = {name: this.employeeName, age: this.employeeAge, address: this.employeeAddress};

    this.crudService.create_Newemployee(Record).then((res: any) => {
      this.employeeName = '';
      this.employeeAge = undefined;
      this.employeeAddress = '';
      this.message = 'Employee date save done';
      setInterval(() => {
        this.message = '';
      }, 5000);
    }).catch(error => {
      console.log(error);
    });
  }

  EditRecord(Record: any) {
    console.log(Record);
    Record.isEdit = true;
    Record.editname = Record.name;
    Record.editage = Record.age;
    Record.editaddress = Record.address;
  }

  Updaterecord(recordData: any) {
    let record = {name: recordData.editname, age: recordData.editage, address: recordData.addresss};
    this.crudService.update_employee(recordData.id, record);
    recordData.isEdit = false;
  }

  DeleteEmployee(recordId: any) {
    alert('Are you shure to delete this record?');
    this.crudService.deleteRecord(recordId);
  }

}
