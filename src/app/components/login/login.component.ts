import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { LoginService } from "./login-service/login.service";

@Component({
    selector : 'app-login',
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.css']
})
export class LoginComponent implements OnInit {
    myReactiveForm:any;
    constructor(private loginservice: LoginService){}

    ngOnInit(){
        this.myReactiveForm = new FormGroup({
            email : new FormControl("",[Validators.email,Validators.required]),
            password : new FormControl('',Validators.required)
        })
    }

    loginUser(){
        // console.log(this.myReactiveForm.value);
        if(this.myReactiveForm.invalid){
            return;
        }
        this.loginservice.Login(this.myReactiveForm.value)
        .subscribe(
        response => { 
            response
        },
        (error:Response) => {
            if(error.status === 400){
                alert('This User is not login')
            }else{
                 alert("an unexpected error ocurrs");
            }
            // console.log(error);
        })
    }

}