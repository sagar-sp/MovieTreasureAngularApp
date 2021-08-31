import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";

const routes: Routes = [
    {path : '', redirectTo:'movies', pathMatch:'full'},
    {
      path : 'movies', loadChildren : () => import('./movies/movies.module').then(module=> module.MoviesModule )
    },
    {
      path:'people', loadChildren :()=> import('./people/people.module').then(module => module.PeopleModule)
    },
    { path:'login', component : LoginComponent },
    { path:'signup', component : SignupComponent }
]

@NgModule({
    imports : [
        RouterModule.forRoot(routes)
    ],
    exports : [
        RouterModule
    ]
})
export class AppRouteModule {

}