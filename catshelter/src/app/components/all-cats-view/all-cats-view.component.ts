import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DataOperations } from 'ng-jexia';
import {MatDialogModule, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CdkTableModule} from '@angular/cdk/table';
import {DataService} from '../../services/data.service';
import {CatDialogComponent} from '../cat-dialog/cat-dialog.component';
import {UpdatecatDialogComponent} from '../updatecat-dialog/updatecat-dialog.component';
import { ICat } from '../../interfaces/cat';
import { FilterCatDialogComponent } from 'src/app/components/filter-cat-dialog/filter-cat-dialog.component';
import { Output,EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'all-cats-view',
  templateUrl: './all-cats-view.component.html',
  styleUrls: ['./all-cats-view.component.css']
})
export class AllCatsViewComponent implements OnInit {
  //An output even to emit an boolean event from the child component to a parent.
  @Output() notifyAllCats: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() notifyFilteredCats: EventEmitter<any> = new EventEmitter<any>();
  filteredCats: Observable<ICat[]>;
  sortedCats: any[];
  isFilteredResult: boolean = false;
  isAllResult: boolean = true;
  isSortedResult: boolean = false;
  
  //These are the columns to display in the Material Data Table
  displayedColumns = ['name', 'color', 'race', 'date_of_birth', 'vaccinated', 'sheltername' , 'action'];
  dialogResult = "";
  
  //This is our Jexia cats related dataset cats/shelters from our service in order to
  //display all cats and the shelter they belong to
  cats:Observable<ICat[]> = this.dataService.cats;

  constructor(private dataService: DataService, private dataOperations: DataOperations, private dialog: MatDialog) { }

  ngOnInit() {
  }
  
  //Opens the CatDialogComponent in order to add a cat to the dataset when
  //somebody hits the add Cats button
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

  //Deletes the cat from the Jexia dataset when the delete button is clicked.
  deleteCat(id: string){
    return this.dataService.removeCat(id);
  }

  //Opens the filterDialog to set some filter parameters to filter the cats dataset
  //Its called when somebody hits the filters button
  openFilterDialog(cat: ICat[]){
    let dialogRef = this.dialog.open(FilterCatDialogComponent, {
      width: '600px',
      data: { cat }
    })

    let sub = dialogRef.componentInstance.onConfirmShowAllCats.subscribe((data) => {
      console.log("DATA" + data)
    
            
    })

    let sub2 = dialogRef.componentInstance.filteredCats.subscribe((data) => {
      this.filteredCats = data;
      this.isAllResult = false;
      this.isFilteredResult = true;
      console.log("DATA2" + JSON.stringify(this.filteredCats))


    })
  }

  sortAscending(){
    this.dataService.sortAscending().then((records) => {
      console.log("SORTASC RECORDS" + JSON.stringify(records))
      this.sortedCats = records
      this.isSortedResult = true;
      this.isAllResult = false;
      this.isFilteredResult = false;
    }).catch((error) => {
      console.log(error)
    })
  }

  sortDescending(){
    this.dataService.sortDescending().then((records) => {
      console.log("SORTDESC Records" + JSON.stringify(records));
    })
  }


  //Opens the UpdatecatDialogComponent in order to edit a cat. Expects a Cats interface
  //which is filled in the UpdateCatDialogComponent
  editCat(cat: ICat[]){
    let dialogRef = this.dialog.open(UpdatecatDialogComponent, {
      width: '600px',
      data: { cat   }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog closed:" + result);
      this.dialogResult = result;
    })


 }



}