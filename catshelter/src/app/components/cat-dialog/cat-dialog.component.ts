import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { MAT_DIALOG_DATA} from '@angular/material';
import {RegisterService} from '../../services/register.service';
import {FormsModule, FormGroup, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'cat-dialog',
  templateUrl: './cat-dialog.component.html',
  styleUrls: ['./cat-dialog.component.css']
})
export class CatDialogComponent implements OnInit {
 public catform: FormGroup;

  constructor(private formbuilder: FormBuilder, private registerservice: RegisterService, private dialogRef: MatDialogRef<CatDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: string) { }

  ngOnInit() {
    this.catform = this.formbuilder.group({
      id: '',
      name: '',
      color: '',
      race: '',
      vaccinated: '',
      sheltername: ''
    })
  }

  onCloseConfirm(){
    this.dialogRef.close('Confirm');
  }

  onCloseCancel(){
    this.dialogRef.close('Cancel');

  }

  onSubmit(){
    this.registerservice.addCat(this.catform.value)
  }

}
