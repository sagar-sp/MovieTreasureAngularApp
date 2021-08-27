import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PeopleHomepageComponent } from './components/people-homepage/people-homepage.component';
import { PeopleRoute } from "./people-router.module";

@NgModule({
    imports : [
      CommonModule,
      PeopleRoute
    ],
    exports : [],
    declarations : [
    PeopleHomepageComponent
  ],
    providers : []
})
export class PeopleModule{

}