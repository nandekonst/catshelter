import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {DataService} from '../../services/data.service';
import { ICat } from '../../interfaces/cat';

@Component({
  selector: 'app-updateshelter-dialog',
  templateUrl: './updateshelter-dialog.component.html',
  styleUrls: ['./updateshelter-dialog.component.css']
})
export class UpdateshelterDialogComponent implements OnInit {

  shelterToUpdate:string = this.data


  constructor(private dataservice: DataService, private dialogRef: MatDialogRef<UpdateshelterDialogComponent> ,  @Inject(MAT_DIALOG_DATA) private data: string) { }

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
