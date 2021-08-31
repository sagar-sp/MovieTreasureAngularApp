import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SignUpService } from "./signup-services/signup.service";
import { UserNameValidators } from "./signup-validators/username.validators";
@Component({
    selector : 'app-signup',
    templateUrl : './signup.component.html',
    styleUrls : ['./signup.component.css']
})
export class SignupComponent implements OnInit{
    constructor(private signup : SignUpService){}
    myReactiveFrom:any;
    ngOnInit(){
        this.myReactiveFrom = new FormGroup({
            name : new FormControl('',[Validators.required, UserNameValidators.cannotContainSpace]),
            lname : new FormControl('',[Validators.required, UserNameValidators.cannotContainSpace]),
            email : new FormControl('',[Validators.email,Validators.required]),
            address : new FormControl('', [Validators.required]),
            password : new FormControl('',Validators.required)
        });
        console.log(this.myReactiveFrom);
    }

    signUpUser(){
        if(this.myReactiveFrom.invalid){
            return;
        }
        this.signup.Signup(this.myReactiveFrom.value)
        .subscribe(
        response => {
            response
        },
        (error:Response)=>{
            if(error.status === 400){
                alert('NOT able to save user in DB');
            }
            else{
                alert("Unexpected Error Occur");
            }
        });
    }
    
    
}