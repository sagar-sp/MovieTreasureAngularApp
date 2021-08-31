import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class LoginService{
    constructor(private http : HttpClient){}
    Login(data:any){
        return this.http.post('http://localhost:3005/api/signin',data);
    }
}