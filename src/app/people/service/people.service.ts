import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'

@Injectable({
    providedIn : 'root'
})
export class PeopleService{
    constructor(private http : HttpClient){ }

    getPopularPeople(){
        return this.http.get('person/popular')
    }
}