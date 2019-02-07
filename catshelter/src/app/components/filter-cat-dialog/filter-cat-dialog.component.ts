import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { MAT_DIALOG_DATA} from '@angular/material';
import {DataService} from '../../services/data.service';
import {FormGroup, FormControl,  ReactiveFormsModule, FormBuilder} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'filter-cat-dialog',
  templateUrl: './filter-cat-dialog.component.html',
  styleUrls: ['./filter-cat-dialog.component.css']
})
export class FilterCatDialogComponent implements OnInit {

filterRecords:any
@Output() onConfirmShowAllCats: EventEmitter<boolean> = new EventEmitter<boolean>();
@Output() filteredCats: EventEmitter<any> = new EventEmitter<any>();
  catfilterform: FormGroup;
  color: FormControl;
  race: FormControl;
  vaccinated: FormControl;
  isChecked: boolean = false;


  constructor(private formbuilder: FormBuilder, private dataservice: DataService, private dialogRef: MatDialogRef<FilterCatDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: string) { }

  
  ngOnInit() {
  console.log("Instantiated FilterDialogComponent")

    this.catfilterform = this.formbuilder.group({
      color: this.color,
      race: this.race,
      vaccinated: this.vaccinated

    })

  }
  
  onCloseConfirm(){
    this.dialogRef.close("Confirm");

    this.dataservice.filterCats(this.catfilterform.value).then(records => {
      console.log("RECORDS" + JSON.stringify(records))
      this.filteredCats.emit(records);

    }).catch((error) => {
     console.log("No filter options were selected")
    })

    this.onConfirmShowAllCats.emit(false);

    
  }

  onCloseCancel(){
    this.dialogRef.close("Cancel")
  }

 

 

}
