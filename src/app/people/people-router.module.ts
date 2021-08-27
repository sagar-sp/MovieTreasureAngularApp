import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PeopleHomepageComponent } from "./components/people-homepage/people-homepage.component";

const routes:Routes=[
    {
      path:'', component:PeopleHomepageComponent
    }
]
@NgModule({
    imports : [
        RouterModule.forChild(routes)
    ],
    exports : [
        RouterModule
    ]
})
export class PeopleRoute{

}