import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  color:string="#76daf0";
  constructor(private router : Router) { }
  
  ngOnInit(): void {
  }

  login(){
    alert("Login");
    this.router.navigate(['/login'])
  }
  signup(){
    alert("SignUp");
    this.router.navigate(['/signup'])
  }

}
