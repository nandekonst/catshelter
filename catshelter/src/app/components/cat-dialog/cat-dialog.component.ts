import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { MAT_DIALOG_DATA} from '@angular/material';
import {DataService} from '../../services/data.service';
import {FormsModule, FormGroup, FormControl,  ReactiveFormsModule, FormBuilder} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {IShelter} from '../../interfaces/shelter';

@Component({
  selector: 'cat-dialog',
  templateUrl: './cat-dialog.component.html',
  styleUrls: ['./cat-dialog.component.css']
})
export class CatDialogComponent implements OnInit {
 public catform: FormGroup;
 id: FormControl;
 name: FormControl;
 color: FormControl;
 race: FormControl;
 vaccinated: FormControl;
 sheltername: FormControl;
 shelters_id: FormControl;
 shelters = this.dataservice.shelters;


 
 
 constructor(private formbuilder: FormBuilder, private dataservice: DataService, private dialogRef: MatDialogRef<CatDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: string) { }

  ngOnInit() {

    this.catform = this.formbuilder.group({
      id: this.id,
      name: this.name,
      color:this.color,
      race:this.race,
      vaccinated: this.vaccinated,
      shelters_id: this.shelters_id,
    })

  }

  onCloseConfirm(){
    this.dialogRef.close('Confirm');
    let catform_array = []
    catform_array.push(this.catform.value);
    this.dataservice.addCat(catform_array);
  }

  onCloseCancel(){
    this.dialogRef.close('Cancel');

  }

  onSubmit(){
    
  }

}
