import { Component, OnInit, Inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatNativeDateModule   } from '@angular/material';
import {DataService} from '../../services/data.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {Color} from '../../interfaces/color';
import {Race} from '../../interfaces/race';
import { ICat } from 'src/app/interfaces/cat';

@Component({
  selector: 'app-updatecat-dialog',
  templateUrl: './updatecat-dialog.component.html',
  styleUrls: ['./updatecat-dialog.component.css']
})
export class UpdatecatDialogComponent implements OnInit {
catToUpdate:ICat  = this.data;


colors: Color[] = [
  {value: "black", viewValue: "Black"},
  {value: "white", viewValue: "White"},
  {value: "grey", viewValue: "Grey"},
  {value: "red", viewValue: "Red"}
 ]

 races: Race[] = [
   {value: "maine coon", viewValue: "Maine Coon"},
   {value: "bengal", viewValue: "Bengal"},
   {value: "siamese", viewValue: "Siamese"},
   {value: "european shorthair", viewValue: "European Shorthai"},

 ]


constructor(private dataservice: DataService,  private dialogRef: MatDialogRef<UpdatecatDialogComponent> ,  @Inject(MAT_DIALOG_DATA) private data: ICat) { }

 ngOnInit() {

 }

 onCloseConfirm(){
    console.log("Update this cat" + JSON.stringify(this.catToUpdate))
    this.dialogRef.close('Confirm');
    this.dataservice.updateCat(this.catToUpdate);
 }

 onCloseCancel(){
    this.dialogRef.close('Cancel');
 }
 

}
