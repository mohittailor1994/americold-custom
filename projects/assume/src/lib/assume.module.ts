import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AssumeComponent } from './assume.component';
import { MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MessagePopupComponent } from './message-popup/message-popup.component';

@NgModule({
  declarations: [AssumeComponent, MessagePopupComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatDialogModule
  ],
  exports: [AssumeComponent]
})
export class AssumeModule { }
