import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})


export class OverviewComponent implements OnInit {

  showcatspanel:boolean = false;
  showshelterpanel:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showCats(){
    this.showshelterpanel = false;
    this.showcatspanel = true;

  }

  showShelters(){
    this.showcatspanel = false;
    this.showshelterpanel = true;
  }
 

}
