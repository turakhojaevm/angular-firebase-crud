import { Component } from '@angular/core';
import { CrudService } from "./services/crud.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  employee!: string;
  employeeName!: string;
  employeeAge!: undefined;
  employeeAddress!: string;
  message!: string;

  constructor(private crudService: CrudService) {
  }

  CreateRecord() {
    let Record = {name: this.employeeName, age: this.employeeAge, address: this.employeeAddress};

    this.crudService.create_Newemployee(Record).then((res: any) => {
      this.employeeName = '';
      this.employeeAge = undefined;
      this.employeeAddress = '';
      console.log(res);
      this.message = 'Employee date save done';
    }).catch(error => {
      console.log(error)
    });
  }

}
