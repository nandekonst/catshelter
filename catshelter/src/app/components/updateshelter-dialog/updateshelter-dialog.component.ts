import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {RegisterService} from '../../services/register.service';

@Component({
  selector: 'app-updateshelter-dialog',
  templateUrl: './updateshelter-dialog.component.html',
  styleUrls: ['./updateshelter-dialog.component.css']
})
export class UpdateshelterDialogComponent implements OnInit {

  shelterToUpdate = this.data


  constructor(private registerservice: RegisterService, private dialogRef: MatDialogRef<UpdateshelterDialogComponent> ,  @Inject(MAT_DIALOG_DATA) private data: string) { }

  ngOnInit() {
  }

  onCloseConfirm(){
    console.log("Update this shelter" + JSON.stringify(this.shelterToUpdate))
    this.dialogRef.close('Confirm');
    this.registerservice.updateShelter(this.shelterToUpdate);

  }

  onCloseCancel(){
    this.dialogRef.close('Cancel');

  }

  onSubmit(){
    
  }

}
