import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../core/Modal/object-modal';
import { LoginSignup } from '../../shared/services/login-signup';
import { subscribeOn } from 'rxjs';
@Component({
  selector: 'app-signin-signup',
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './signin-signup.html',
  styleUrl: './signin-signup.css',
})
export class SigninSignup {
  regForm: boolean = false;
  signUpform!: FormGroup;
  signInform!: FormGroup;
  signUpsubmitted = false;
  herf: string = '';
  user_data: any;
  user_dto!: User;
  user_reg_data: any;
  signInFormValue: any = {};
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginSignup) {

  }
  ngOnInit(): void {
    this.herf = this.router.url;
    if (this.herf == '/sign-up') {
      this.regForm = true;
    } else if (this.herf == 'sign-in') {
      this.regForm = false
    }
    this.signUpform = this.formBuilder.group({
      name: ['', Validators.required],
      mobNumber: ['', Validators.required],
      age: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      addLine1: ['', Validators.required],
      addLine2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      language: ['', Validators.required],
      gender: ['', Validators.required],
      aboutYou: ['', Validators.required],
      uploadPhoto: ['', Validators.required],
      agreetc: ['', Validators.required],
      role: ['', Validators.required],
    })
  }
  get rf() {
    return this.signUpform.controls;
  }
  onSubmitSignUp() {
    this.signUpsubmitted = true;
    if (this.signUpform.invalid) {
      return;
    }
    this.user_reg_data = this.signUpform.value;
    this.user_dto = {
      aboutYou: this.user_reg_data.aboutYou,
      age: this.user_reg_data.age,
      agreetc: this.user_reg_data.agreetc,
      dob: this.user_reg_data.dob,
      email: this.user_reg_data.email,
      gender: this.user_reg_data.gender,
      address: {
        id: 0,
        addLine1: this.user_reg_data.addLine1,
        addLine2: this.user_reg_data.addLine2,
        city: this.user_reg_data.city,
        state: this.user_reg_data.state,
        zipCode: this.user_reg_data.zipCode,
      },
      language: this.user_reg_data.language,
      mobNumber: this.user_reg_data.mobNumber,
      name: this.user_reg_data.name,
      password: this.user_reg_data.password,
      uploadPhoto: this.user_reg_data.uploadPhoto,
      role: this.user_reg_data.role
    }
    // this.loginService.userRegister(this.user_dto).subscribe(data =>{
    //   alert("User Register Successfull 0");
    //   this.router.navigateByUrl('/sign-in')
    // })
    this.loginService.userRegister(this.user_dto).subscribe({
      next: (data) => {
        alert("User Registered Successfully!");
        this.router.navigateByUrl('/sign-in');
      },
      error: (err) => {
        console.log(err);
        alert("API not working / Server not running");
      }
    });
  }

}