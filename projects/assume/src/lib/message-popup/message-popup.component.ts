import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { Router } from '@angular/router';


@Component({

  selector: 'app-message-popup',

  templateUrl: './message-popup.component.html',

  styleUrls: ['./message-popup.component.css']

})

export class MessagePopupComponent implements OnInit {

  headermessage: any

  bodymessage: any


  constructor(private dialog: MatDialog, private router: Router, public dialogRef: MatDialogRef<MessagePopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

    dialogRef.disableClose = true;

  }


  ngOnInit() {

    this.headermessage = this.data.headerMsg;

    this.bodymessage = this.data.bodyMsg;

    console.log(this.data)

  }

  onCloseClick(): void {

    this.dialogRef.close();

  }


}
