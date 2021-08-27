import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MoviesModule } from './movies/movies.module';
import { PeopleModule } from './people/people.module';
import { AppRoute } from './app-router.module';
import { PeopleService } from './people/service/people.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpUrl } from './interceptor/http.interceptor';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MoviesModule,
    PeopleModule,
    AppRoute,
    HttpClientModule
  ],
  providers: [PeopleService,
  { provide: HTTP_INTERCEPTORS, useClass : HttpUrl, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
