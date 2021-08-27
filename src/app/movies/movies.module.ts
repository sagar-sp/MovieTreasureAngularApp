import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MoviesHomepageComponent } from './components/movies-homepage/movies-homepage.component';
import { MoviesRouteModule } from "./movies-route.module";


@NgModule({
  imports : [
    CommonModule,
    MoviesRouteModule
  ],
  exports : [],
  declarations : [
    MoviesHomepageComponent
  ],
  providers : []
})
export class MoviesModule{

}