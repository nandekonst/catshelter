import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { MAT_DIALOG_DATA} from '@angular/material';
import {DataService} from '../../services/data.service';
import {FormsModule, FormGroup, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-shelter-dialog',
  templateUrl: './shelter-dialog.component.html',
  styleUrls: ['./shelter-dialog.component.css']
})
export class ShelterDialogComponent implements OnInit {
  public shelterform: FormGroup

  constructor(private formbuilder: FormBuilder, private dataservice: DataService, private dialogRef: MatDialogRef<ShelterDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: string) { }

  ngOnInit() {
    this.shelterform = this.formbuilder.group({
      name: '',
      address: '',
      telephone: '',
      email: '' 
    
    })
  }

  onCloseConfirm(){
    let shelterform_array = []
    shelterform_array.push(this.shelterform.value);
    this.dataservice.addShelter(shelterform_array)
    this.dialogRef.close('Confirm');
  }

  onCloseCancel(){
    this.dialogRef.close('Cancel');

  }



}
