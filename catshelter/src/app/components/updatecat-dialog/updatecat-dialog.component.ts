import { Component, OnInit, Inject } from '@angular/core';
import {FormsModule, FormGroup, FormControl,  ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatNativeDateModule   } from '@angular/material';
import {RegisterService} from '../../services/register.service';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {IShelter} from '../shelter/shelter';

 

@Component({
  selector: 'app-updatecat-dialog',
  templateUrl: './updatecat-dialog.component.html',
  styleUrls: ['./updatecat-dialog.component.css']
})
export class UpdatecatDialogComponent implements OnInit {
  
catToUpdate = this.data
currentDate = new Date();


constructor( private formbuilder: FormBuilder,private registerservice: RegisterService,  private dialogRef: MatDialogRef<UpdatecatDialogComponent> ,  @Inject(MAT_DIALOG_DATA) private data: string) { }

 ngOnInit() {

   
 }

  onCloseConfirm(){
        console.log("Update this cat" + JSON.stringify(this.catToUpdate))
    this.dialogRef.close('Confirm');
    
    this.registerservice.updateCat(this.catToUpdate);

  }

  onCloseCancel(){
    this.dialogRef.close('Cancel');

  }
 

  onSubmit(){
   


  }

}
