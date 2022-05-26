import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AssumeService } from './assume.service';
import { MessagePopupComponent } from './message-popup/message-popup.component';

@Component({
  selector: 'americold-assume',
  template: ``,
  styles: [],
  providers: [AssumeService]
})
export class AssumeComponent implements OnInit {
  facilityCustomerData: any;
  constructor(private assumeService: AssumeService, public pop: MatDialog) { }

  ngOnInit(): void {
    this.getFacilities();
  }

  getFacilities() {
    const valueAssumeUser = this.getCookie('AssumedUser-Test');
    if (valueAssumeUser) {
      console.log('Is Assume User');
    } else {
      console.log('Not Assume user');
    }
    // this.assumeService.getFacility().subscribe(res => {
    //
    //   if (res === "" || res == null || res === undefined) {
    //
    //     this.showMessagePopUp('This Application Requires that you Assumes a Warehouses, ' +
    //       'Customer Order Entry, or Customer User account. Please "Close" to assume one.', 'Success');
    //   }
    //   else {
    //
    //     this.facilityCustomerData = res;
    //
    //     for (let i = 0; i < this.facilityCustomerData.length; i++) {
    //
    //       this.facilityCustomerData[i].facilitySelected = false;
    //       this.facilityCustomerData[i].customerDeatilsList.forEach((d: { checked: boolean; }) => {
    //         d.checked = false;
    //       });
    //     }
    //     this.assumeService.facilityCustomerData = JSON.stringify(this.facilityCustomerData);
    //     console.log(this.facilityCustomerData);
    //   }
    //
    // });
  }

  getCookie(cname) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  private showMessagePopUp(bodyMsg: string, headerMsg: string) {
    const dialogRef = this.pop.open(MessagePopupComponent, {
      disableClose: true,
      width: '450px',
      autoFocus: false,
      data:
        { bodyMsg, headerMsg }
    });
    dialogRef.afterClosed().subscribe(result => {
      window.location.href = this.assumeService.i3pl_loginpage + '/Assume/#/';
    });
  }

}
