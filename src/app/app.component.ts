import { Component } from '@angular/core';
import data from './US_States_and_Cities.json';
import { FormsModule } from '@angular/forms';

import { YelpService } from './yelp.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private yelpService : YelpService) { };
  
  states = Object.keys(data).sort();

  cities: any;

  selectedBusiness: any;

  searchInfo = {
    state: "",
    city: "",
    pricePoint: ""
  };

  getCities() {
    var selectedState = this.searchInfo.state;

    this.cities = data[selectedState].sort();
    console.log(this.cities);

  }

  submitSearch() {

    this.yelpService.businessSearch(this.searchInfo.pricePoint,this.searchInfo.state,this.searchInfo.city).subscribe(
      res => {
        var selection = Math.floor(Math.random() * res.businesses.length);
        console.log(res.businesses[selection]);
        this.selectedBusiness = res.businesses[selection]
      }
    )

  }

}
