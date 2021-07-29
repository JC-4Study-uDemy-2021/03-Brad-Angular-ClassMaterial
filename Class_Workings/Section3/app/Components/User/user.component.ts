import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})

/* // Videos 12, 13, 14
export class UserComponent implements OnInit {
  // properties
  // firstName = 'Jonny';
  // lastName = 'Boy';
  // age = 30;
  // address = { street: '1 Main Street', city: 'Derby' };

  firstName: string;
  lastName: string;
  age: number;
  address: any;
  hasKids: boolean;
  numberArray: number[]; // control the input of the array
  mixArray: any[]; // allows you to enter anything to the array
  myTuple: [string, number, boolean]; // control the datatype

  // Method -- Constructors runs when the component is invoked
  constructor() {
    
    // console.log(`hello Everyone and ${this.firstName}`);
    // this.sayHello();

    // // working with methods outside of constructor
    // console.log(this.age);
    // this.hasBirthday();
    // console.log(this.age);
    

    this.firstName = 'Jonny';
    this.lastName = 'Boy';
    this.age = 30;
    this.address = { street: '1 Main Street', city: 'Derby' };
    this.hasKids = true;
    this.numberArray = [1, 2, 3];
    this.mixArray = [1, 2, 'helllo'];
    this.myTuple = ['a', 123, true]; // anything outside of the controls will be OK

    console.log(this.addNumbers(2, 3));
  }

  sayHello() {
    console.log(`hello agian ${this.firstName}`);
  }

  hasBirthday() {
    this.age += 1;
  }

  showAge() {
    return this.age;
  }

  addNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }

  ngOnInit(): void {}
}
*/

// Video 15 - Interface
/*
export class UserComponent implements OnInit {
  user: User;

  constructor() {
    this.user = {
      firstName: 'John',
      lastName: 'Smith',
      age: 20,
      address: {
        Street: '1 jojo street',
        City: 'Notts',
      },
    };
  }

  ngOnInit(): void {}
}
*/

// Video 16 - OnInit
// It is better practice to put these 'actins' in this method
export class UserComponent implements OnInit {
  user: User;

  constructor() {
   
  }

  ngOnInit() {
      this.user = {
      firstName: 'John',
      lastName: 'Smith',
      age: 20,
      address: {
        Street: '1 jojo street',
        City: 'Notts',
      },
    };
  }
}
