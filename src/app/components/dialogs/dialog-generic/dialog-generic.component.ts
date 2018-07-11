import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-generic',
  templateUrl: './dialog-generic.component.html',
  styleUrls: ['./dialog-generic.component.css']
})
export class DialogGenericComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogGenericComponent>) { }

  ngOnInit() {
  }

  returnAndClose(){
    this.dialogRef.close(true);
  }
}
