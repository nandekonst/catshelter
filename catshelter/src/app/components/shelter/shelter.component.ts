import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from "@angular/material";
import {CatDialogComponent} from '../cat-dialog/cat-dialog.component';
import { IShelter } from '../shelter/shelter';

@Component({
  selector: 'shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.css']
})
export class ShelterComponent implements OnInit {
  displayedColumns = ['name', 'address', 'telephone', 'email', 'action'];
  dataSource = new MatTableDataSource(SHELTER_DATA);
  dialogResult: "";
  createShelter: IShelter;
  name: string;
  address: string;
  telephone: number;
  email: string;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  



  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  

  openDialog(){
    let dialogRef = this.dialog.open(CatDialogComponent, {
      width: '600px',
      data: this.createShelter = {name:this.name, address: this.address, telephone: this.telephone, email: this.email}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog closed:" + result);
      this.dialogResult = result;
    })
  }

  editShelter(){
    console.log("Edit shelter");
  }

  deleteShelter(){
    console.log("Delete shelter");
  }

}


const SHELTER_DATA: IShelter[] = [
  {name: "The Catshouse", address: "Bakerstreet 12", telephone: 1564894, email: "thecatshouse@mail.com"}, 
  {name: "Dreamy Shelters", address: "Dreamy Drive 44", telephone: 494561651, email: "dreamyshelters@mail.com"},
  {name: "The Cat Hotel", address: "Lewis Road 55", telephone: 89456123, email: "thecathotel@mail.com"}
 
];
