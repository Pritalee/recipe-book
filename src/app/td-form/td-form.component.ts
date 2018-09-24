import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent {
  @ViewChild('f') signupForm: NgForm;
  submitted=false;
  defa="Advanced"
  user={
    email:"",
    choice: "",
    passw: ""
  };

  onSubmit(){
    this.submitted=true;
    this.user.email=this.signupForm.value.email;
    this.user.choice=this.signupForm.value.choice;
    this.user.passw=this.signupForm.value.passw;
  }
}
