import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  // providers: [ReactiveFormsModule]
})
// export interface resultForm { reason: string; amount: number }
export class HomePage implements OnInit {

  expenseForm: FormGroup;
  // // expenseList: []

  constructor() {

  }

  ngOnInit(): void {
    this.expenseForm = new FormGroup({
      reason: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required)
    });
    console.log(this.expenseForm);
  }

  onSubmit(values) {
    console.log(values);
    console.log(this.expenseForm);
    // this.expenseList.push(values);
    // this.expenseList = [...this, values]
  }


}
