import { Component } from '@angular/core';
import { PeopleService } from '../shared/people.service';
import { JsonPipe } from '@angular/common';
 
@Component({
  standalone: true,
  imports: [ JsonPipe ],
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