import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-help-c',
  templateUrl: './help-c.component.html',
  styleUrls: ['./help-c.component.css']
})
export class HelpCComponent {

  form:FormGroup = this.fb.group({
    user_name:'',
    subject:'',
    message:'',
    from_email:''
  })
  constructor(private fb:FormBuilder){

  }
  
  async send(){
    emailjs.init('RI_zQs4jT-wt-7bwJ');
    let response = await emailjs.send("service_0vchyee","template_o1ddzc9",{
    user_name: this.form.value.user_name,
    subject: this.form.value.subject,
    message: this.form.value.message,
    from_email: this.form.value.from_email,
    });
    alert("message has ben sent");
    this.form.reset();
  }

}
