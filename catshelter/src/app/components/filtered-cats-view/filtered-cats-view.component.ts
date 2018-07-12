import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatDialogModule, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AllCatsViewComponent  } from '../all-cats-view/all-cats-view.component';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'filtered-cats-view',
  templateUrl: './filtered-cats-view.component.html',
  styleUrls: ['./filtered-cats-view.component.css']
})
export class FilteredCatsViewComponent implements OnInit {
  @ViewChild(AllCatsViewComponent) private allCatsComponent: AllCatsViewComponent;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    console.log("Instantiated FilteredCatsViewComponent" + this.allCatsComponent.filteredCats)
  }

  
 



}
