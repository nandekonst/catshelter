import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from "@angular/material";
import {ShelterDialogComponent} from '../shelter-dialog/shelter-dialog.component';
import {UpdateshelterDialogComponent} from '../updateshelter-dialog/updateshelter-dialog.component';
import {RegisterService} from '../../services/register.service';
import { IShelter } from '../shelter/shelter';

@Component({
  selector: 'shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.css']
})
export class ShelterComponent implements OnInit {
  SHELTER_DATA: IShelter[] = []

  displayedColumns = ['name', 'address', 'telephone', 'email', 'action'];
  dataSource = new MatTableDataSource(this.SHELTER_DATA);
  dialogResult: "";
  shelters = this.registerService.shelters;


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  constructor(private dialog: MatDialog, private registerService: RegisterService) { }

  ngOnInit() {
  }
  

  openDialog(){
    let dialogRef = this.dialog.open(ShelterDialogComponent, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog closed:" + result);
      this.dialogResult = result;
    })
  }

  editShelter(shelter: IShelter[]){
    console.log("Edit shelter");
    let dialogRef = this.dialog.open(UpdateshelterDialogComponent, {
      width: '600px',
      data: { shelter  }
    });
  }



  deleteShelter(id: string){
    return this.registerService.removeShelter(id);
  }

}


