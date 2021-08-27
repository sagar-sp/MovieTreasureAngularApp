import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-homepage',
  templateUrl: './movies-homepage.component.html',
  styleUrls: ['./movies-homepage.component.css']
})
export class MoviesHomepageComponent implements OnInit {

  movies:any []=[];
  constructor(private moviesservice : MoviesService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.moviesservice.getMoviesList()
    .subscribe((response:any) =>{
      // console.log(response.items);
      // debugger
      this.movies = response.items;
    })
    
  }

}
