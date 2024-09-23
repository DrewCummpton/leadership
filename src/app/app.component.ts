import { Component } from '@angular/core';
import { PeopleService } from '../shared/people.service';
 
@Component({
  standalone: true,
  imports: [],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  peopleArray: any;

  constructor(private peopleService: PeopleService) { }

  getPeople(){
    this.peopleService.getPeople().subscribe(people => {
        this.peopleArray = people
    });
  }

  ngOnInit() {
    this.getPeople();
  }
}