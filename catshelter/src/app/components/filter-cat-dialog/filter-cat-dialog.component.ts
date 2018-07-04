import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { MAT_DIALOG_DATA} from '@angular/material';
import {RegisterService} from '../../services/register.service';
import {FormsModule, FormGroup, FormControl,  ReactiveFormsModule, FormBuilder} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-filter-cat-dialog',
  templateUrl: './filter-cat-dialog.component.html',
  styleUrls: ['./filter-cat-dialog.component.css']
})
export class FilterCatDialogComponent implements OnInit {


  catfilterform: FormGroup;
  color: FormControl;
  race: FormControl;
  vaccinated: FormControl;


  constructor(private formbuilder: FormBuilder, private registerservice: RegisterService, private dialogRef: MatDialogRef<FilterCatDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: string) { }

  ngOnInit() {
    this.catfilterform = this.formbuilder.group({
      color: this.color,
      race: this.race,
      vaccinated: this.vaccinated

    })

  }

  onCloseConfirm(){
    this.dialogRef.close("Confirm");
    this.registerservice.filterCatColorRace(this.catfilterform.value).then(records => {
      console.log("RECORDS" + JSON.stringify(records))
    })
  }

  onCloseCancel(){
    this.dialogRef.close("Cancel")
  }

  onSubmit(){
    console.log("Form submitted")
  }

 

}
