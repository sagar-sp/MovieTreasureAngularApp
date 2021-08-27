import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class MoviesService {
    constructor(private http : HttpClient){}

    getMoviesList(){
       return this.http.get(`/list/${3}`);
    }
}