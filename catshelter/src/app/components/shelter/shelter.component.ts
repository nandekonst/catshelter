import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from "@angular/material";
import {ShelterDialogComponent} from '../shelter-dialog/shelter-dialog.component';
import {UpdateshelterDialogComponent} from '../updateshelter-dialog/updateshelter-dialog.component';
import {DataService} from '../../services/data.service';
import { IShelter } from '../../interfaces/shelter';

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
  shelters = this.dataService.shelters;

  
  constructor(private dialog: MatDialog, private dataService: DataService) { }

  ngOnInit() {
  }
  

  openDialog(){
    let dialogRef = this.dialog.open(ShelterDialogComponent, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialogResult = result;
    })
  }

  editShelter(shelter: IShelter[]){
    let dialogRef = this.dialog.open(UpdateshelterDialogComponent, {
      width: '600px',
      data:shelter  
    });
  }



  deleteShelter(id: string){
    return this.dataService.removeShelter(id);
  }

}


