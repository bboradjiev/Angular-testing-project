import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiServiceService } from '../shared/api-service.service';
import { Employee } from '../shared/employeeModel';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent implements OnInit {
  employee: Employee = new Employee();
  employeeArr = [];
  isEditing = false;
  updatedEmployee = new Employee();

  constructor(private api: ApiServiceService) {}

  getData() {
    this.api
      .getEmployee()
      .pipe(
        map((res) => {
          const arr = [];
          for (const key in res) {
            arr.push({ ...res[key] });
          }
          return arr;
        })
      )
      .subscribe((data) => (this.employeeArr = data));
  }

  ngOnInit(): void {
    this.getData();
  }

  onSubmit(form) {
    this.employee.firstName = form.value.firstName;
    this.employee.lastName = form.value.lastName;
    this.employee.email = form.value.email;
    this.employee.mobile = form.value.mobile;
    this.employee.salary = form.value.salary;
    this.api.postEmployee(this.employee).subscribe((data) => this.getData());
    form.reset();
  }

  onEdit(emp, i) {
    this.updatedEmployee.firstName = emp.firstName;
    this.updatedEmployee.lastName = emp.lastName;
    this.updatedEmployee.email = emp.email;
    this.updatedEmployee.mobile = emp.mobile;
    this.updatedEmployee.salary = emp.salary;
    this.updatedEmployee.id = i;
    this.isEditing = !this.isEditing;
  }

  updateEmployee() {
    this.api
      .updateEmployee(this.updatedEmployee, this.updatedEmployee.id)
      .subscribe((data) => this.getData());
    this.updatedEmployee = new Employee();
    this.isEditing = !this.isEditing;
  }

  deleteData(emp) {
    this.api.deleteEmployee(emp.id).subscribe((data) => this.getData());
  }

  getLenght() {
    console.log(this.employeeArr);
  }
}
