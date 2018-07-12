import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatDialogModule, MatDialog, MatDialogRef} from "@angular/material/dialog";
import { FilterCatDialogComponent } from '../filter-cat-dialog/filter-cat-dialog.component';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'filtered-cats-view',
  templateUrl: './filtered-cats-view.component.html',
  styleUrls: ['./filtered-cats-view.component.css']
})
export class FilteredCatsViewComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    console.log("Instantiated FilteredCatsViewComponent")
  }

  
 



}
