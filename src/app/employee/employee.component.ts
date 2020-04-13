import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;


  powers = ['Smart Coder', 'Super Flexible',
    'Logical Thinker', 'Excellent Analyst'];
  model = new Employee(18, '', '', '');



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }
  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }
    this.success = true;
  }

}