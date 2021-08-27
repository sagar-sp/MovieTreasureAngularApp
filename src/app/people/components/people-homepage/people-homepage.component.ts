import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../service/people.service';

@Component({
  selector: 'app-people-homepage',
  templateUrl: './people-homepage.component.html',
  styleUrls: ['./people-homepage.component.css']
})
export class PeopleHomepageComponent implements OnInit {

  people:any= [];
  constructor(private peopleservice: PeopleService) { }

  ngOnInit(): void {
    this.getPopularPeople();
  }

  getPopularPeople(){
    this.peopleservice.getPopularPeople()
    .subscribe(response => {
      this.people = (response as any).results;
    })
  }

}
