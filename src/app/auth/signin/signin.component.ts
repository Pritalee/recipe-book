import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }
  onSignin(form:NgForm){
    const email=form.value.email;
    const password=form.value.email;
    this.authservice.signinUser(email,password);
  }

}
