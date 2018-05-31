import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DataOperations } from 'ng-jexia';
import {MatDialog} from "@angular/material";
import {CdkTableModule} from '@angular/cdk/table';

import {RegisterService} from '../../services/register.service';
import {CatDialogComponent} from '../cat-dialog/cat-dialog.component';
import { ICat } from '../cat/cat';

@Component({
  selector: 'cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})


export class CatComponent {
 
  CATS_DATA: ICat[] = this.registerService.catlist;
  displayedColumns = ['name', 'color', 'race', 'vaccinated', 'sheltername' , 'action'];
  dataSource = new MatTableDataSource(this.CATS_DATA);
  dialogResult = "";
  cats = this.registerService.cats;



  constructor(private registerService: RegisterService, private dataOperations: DataOperations, private dialog: MatDialog) { }
  
  ngOnInit() {
    console.log("CATS_DATA" + this.CATS_DATA);
  }



  openDialog(){
    let dialogRef = this.dialog.open(CatDialogComponent, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog closed:" + result);
      this.dialogResult = result;
    })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  


  deleteCat(id){
    console.log("Delete cat" + id);
    return this.registerService.removeCat(id);
    //hope to do this soon here with Jexia
  }

  editCat(id){
    console.log("Edit cat");
    return this.registerService.updateCat(id);
    //hope to do this soon here with Jexia
  }
}


