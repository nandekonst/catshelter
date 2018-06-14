import { Component, OnInit, Inject } from '@angular/core';
import {FormsModule, FormGroup, FormControl,  ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {RegisterService} from '../../services/register.service';
import { DataOperations } from 'ng-jexia';

import {IShelter} from '../shelter/shelter';

@Component({
  selector: 'app-updatecat-dialog',
  templateUrl: './updatecat-dialog.component.html',
  styleUrls: ['./updatecat-dialog.component.css']
})
export class UpdatecatDialogComponent implements OnInit {
  shelterDataset = this.dataOperations.dataset<IShelter>('shelters')

public shelters = this.shelterDataset.select().execute();


catToUpdate = this.data


constructor( private dataOperations: DataOperations, private formbuilder: FormBuilder,private registerservice: RegisterService,  private dialogRef: MatDialogRef<UpdatecatDialogComponent> ,  @Inject(MAT_DIALOG_DATA) private data: string) { }

 ngOnInit() {

   
 }

  onCloseConfirm(){
    this.dialogRef.close('Confirm');
    this.registerservice.updateCat(this.catToUpdate);

  }

  onCloseCancel(){
    this.dialogRef.close('Cancel');

  }
 

  onSubmit(){
   


  }

}
