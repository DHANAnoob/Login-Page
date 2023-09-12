import { Component } from '@angular/core';
import { faLock,faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGoogle,faGithub } from "@fortawesome/free-brands-svg-icons";
import {FormControl,FormGroup,Validator, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  falock = faLock;
  fauser = faUser;
  faenvelope  = faEnvelope;
  google = faGoogle;
  git = faGithub;
  title = 'Login Page';
  register = new FormGroup({
    name: new FormControl('',Validators.minLength(6)),
    email: new FormControl('',Validators.email),
    password: new FormControl('',[Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),Validators.min(6)])
  })
  getData(){
    console.log(this.register.value)
  }
  get vname(){
    return this.register.get('name')
  }
  get vemail(){
    return this.register.get('email')
  }
  get vpwd(){
    return this.register.get('password')
  }
}
