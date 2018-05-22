import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DataOperations } from 'ng-jexia';
import {MatDialog} from "@angular/material";
import {CatDialogComponent} from '../cat-dialog/cat-dialog.component';
import { ICat } from '../cat/cat';

@Component({
  selector: 'cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})



export class CatComponent {
  displayedColumns = ['name', 'color', 'race', 'vaccinated', 'sheltername' , 'action'];
  dataSource = new MatTableDataSource(CATS_DATA);
  dialogResult = "";

 // catsDataset = this.dataOperations.dataset<Cat>('cats');
 // cats = this.catsDataset.select().execute();

  constructor(private dataOperations: DataOperations, private dialog: MatDialog) { }
  
  ngOnInit() {
    //console.log("THESE ARE CATS" + JSON.stringify(this.cats))
  
    
  }

  openDialog(){
    let dialogRef = this.dialog.open(CatDialogComponent, {
      width: '600px',
      data: "Create a Cat"
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

  addCat(){
    console.log("Add Cat");
  }

  deleteCat(){
    console.log("Delete cat");
  }

  editCat(){
    console.log("Edit cat");
  }
}


const CATS_DATA: ICat[] = [
  {name: "Kitty", color: "gray", race: "Siamese", vaccinated: true, sheltername: "The Catshouse"},
  {name: "Lester", color: "white", race: "European", vaccinated: false, sheltername: "Dreamy Shelters"},
  {name: "Jenny", color: "black", race: "European", vaccinated: true, sheltername:"The Catshouse"},
  {name: "Funky", color: "red", race: "Maine Coon", vaccinated: false, sheltername:"The Catshouse"},

];