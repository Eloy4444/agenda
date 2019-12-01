import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { LoginService } from '../services/login-service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(private fb: FormBuilder, private loginService:LoginService) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
        name:new FormControl(), 
        password: new FormControl(),

      })

  }
  ClickSumit(){
    this.loginService.loginAccess(this.loginForm.value).subscribe(x=>{
      console.log(x)
    })

  }

}