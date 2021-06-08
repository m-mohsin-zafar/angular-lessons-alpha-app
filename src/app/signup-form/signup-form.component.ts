import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { UsernameValidators } from "../commons/validators/username.validators";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  form;
  // form = new FormGroup(
  //   {
  //     'account': new FormGroup(
  //       {
  //         'username': new FormControl(
  //           "", [
  //             Validators.required,
  //             Validators.minLength(7),
  //             UsernameValidators.noSpace
  //           ],
  //           UsernameValidators.shouldBeUnique
  //         ),
  //         'password': new FormControl("", Validators.required),
  //         }
  //       ),
  //   }
  // )

  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        'account': fb.group(
          {
            'username': [
              '',
              [
                Validators.required,
                Validators.minLength(7),
                UsernameValidators.noSpace
              ],
                [
                  UsernameValidators.shouldBeUnique
                ]
            ],
            'password': ['', Validators.required],
          }
        ),
      }
    )
    console.log(this.form.get('account.username'));
  }

  ngOnInit(): void {
  }

  get userName(){
    return this.form.get('account.username');
  }

  get password(){
    return this.form.get('account.password');
  }

  signUp(){
    console.log(JSON.stringify(this.form.value))
    // server side request and response: failure
    // this.form.setErrors(
    //   {signupFailure: true}
    // )
  }
}
