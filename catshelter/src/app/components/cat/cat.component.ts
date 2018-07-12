import { Component, OnInit, ViewChild } from '@angular/core';
import {AllCatsViewComponent} from '../all-cats-view/all-cats-view.component';
import {FilteredCatsViewComponent} from '../filtered-cats-view/filtered-cats-view.component';


@Component({
  selector: 'cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})

//In the Cat Component we display all the different child views. 
export class CatComponent {
  
  //This property makes sure we set showAllCatsView property default to true
  public showAllCatsView: boolean = true;

  //This property makes sure we set showFilteredCatsView default to false
  public showFilteredCatsView: boolean = false;

  constructor() { }
  
  ngOnInit() {
  }

  //When we are notified by an output property and receive an event we set showAllCatsView
  //to the value of the event. 
  

  //Maybe remove this component and handle everything in the all cats view

 /* onNotifyShowCatsView(event){
    console.log("REceived event" + event)
    this.showAllCatsView = event;
    this.showFilteredCatsView = true;
  }*/

  onNotifyFilteredCats(event){
    console.log("REceived filter event" + event)


  }





 

 
}


