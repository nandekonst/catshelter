import { Component, OnInit, Inject } from '@angular/core';
import {FormsModule, FormGroup, FormControl,  ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatNativeDateModule   } from '@angular/material';
import {DataService} from '../../services/data.service';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {IShelter} from '../../interfaces/shelter';

 

@Component({
  selector: 'app-updatecat-dialog',
  templateUrl: './updatecat-dialog.component.html',
  styleUrls: ['./updatecat-dialog.component.css']
})
export class UpdatecatDialogComponent implements OnInit {
  
catToUpdate = this.data


constructor( private formbuilder: FormBuilder,private dataservice: DataService,  private dialogRef: MatDialogRef<UpdatecatDialogComponent> ,  @Inject(MAT_DIALOG_DATA) private data: string) { }

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
