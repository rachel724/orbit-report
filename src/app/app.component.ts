import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          console.log('this is happening');
          console.log(typeof fetchedSatellites);
          console.log(fetchedSatellites.length);
          for(let i = 0; i < fetchedSatellites.length; i++){
            //console.log("this is also happening");
            //console.log(fetchedSatellites[i]);
            let satellite = {
              name: fetchedSatellites[i].name,
              type: fetchedSatellites[i].type,
              launchDate: fetchedSatellites[i].launchDate,
              orbitType: fetchedSatellites[i].orbitType,
              operational: fetchedSatellites[i].operational
            };
            this.sourceList.push(satellite);
          };
       }.bind(this));
    }.bind(this));
 }
}