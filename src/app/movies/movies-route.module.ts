import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesHomepageComponent } from "./components/movies-homepage/movies-homepage.component";

const routes:Routes = [
    {path:'', component : MoviesHomepageComponent}
]
@NgModule({
    imports : [
        RouterModule.forChild(routes)
    ],
    exports : [
        RouterModule
    ]
})
export class MoviesRouteModule{

}