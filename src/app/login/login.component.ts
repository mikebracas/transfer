import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/User';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        username: ['', [Validators.required,Validators.minLength(8), Validators.maxLength(20)]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    });

  }

  get f() { return this.loginForm.controls; }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit(){
    if (this.loginForm.invalid) {
      console.log('invalid');
        return;
    }
    
    this.router.navigate(['/dashboard']);
  }

}
