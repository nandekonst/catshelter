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
 
  displayedColumns = ['name', 'color', 'race', 'vaccinated', 'sheltername' , 'action'];
  dialogResult = "";
  cats = this.registerService.cats;

  constructor(private registerService: RegisterService, private dataOperations: DataOperations, private dialog: MatDialog) { }
  
  ngOnInit() {
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

  
  deleteCat(id: string){
    return this.registerService.removeCat(id);
  }

  editCat(cat: ICat){
    return this.registerService.updateCat(cat);
  }
}


