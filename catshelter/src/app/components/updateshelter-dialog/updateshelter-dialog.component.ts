import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {DataService} from '../../services/data.service';
import { ICat } from '../../interfaces/cat';
import { IShelter } from 'src/app/interfaces/shelter';

@Component({
  selector: 'app-updateshelter-dialog',
  templateUrl: './updateshelter-dialog.component.html',
  styleUrls: ['./updateshelter-dialog.component.css']
})
export class UpdateshelterDialogComponent implements OnInit {

  shelterToUpdate: IShelter = this.data;


  constructor(private dataservice: DataService, private dialogRef: MatDialogRef<UpdateshelterDialogComponent> ,  @Inject(MAT_DIALOG_DATA) private data: IShelter) { }

  ngOnInit() {
  }

  onCloseConfirm(){
    console.log("Update this shelter" + JSON.stringify(this.shelterToUpdate))
    this.dialogRef.close('Confirm');
    this.dataservice.updateShelter(this.shelterToUpdate);
  }

  onCloseCancel(){
    this.dialogRef.close('Cancel');
  }


}
