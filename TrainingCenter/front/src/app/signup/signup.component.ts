import { Component, OnInit } from '@angular/core';
import {Sign} from "./signup.model";
import {SignupService} from "./signup.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  sign: Sign = new Sign();

  constructor(public signupservice: SignupService) {
  }

  ngOnInit() {

  }

  signup() {
    this.signupservice.signup(this.sign)
      .subscribe(data => {
        console.log(data)
      }, err => {
        console.log(err);
      })
  }
}
