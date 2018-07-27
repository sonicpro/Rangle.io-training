import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Component({
	selector: 'app',
	template: `
	  <b>Angular 2 HTTP requests using RxJs Observables!</b>
	  <ul>
	    <li *ngFor="let doctor of doctors">{{doctor.name}}</li>
	  </ul>
	  
	  `
})

export class MyApp {
  private doctors = [];
  
  constructor(http: Http) {

    // Note that flatMap flattens a stream of Observables (i.e Observable of Observables)
    // to a stream of emitted values (a simple Observable), by emitting on the "trunk" stream
    // everything that will be emitted on "branch" streams.
    http.get('http://jsonplaceholder.typicode.com/users/')
        .flatMap((data) => data.json())
        .subscribe((data) => {
          this.doctors.push(data);

        });
  }
}
