import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssumeService {
  facilityCustomerData: any;
  private facitilityServiceURL = "https://test.i-3pl.com/platformservices/api/lookup/getfacilities";

  i3pl_loginpage = "https://test.i-3pl.com";

  constructor(private httpClient: HttpClient) { }


  getFacility() {
      return this.httpClient.get<any>(this.facitilityServiceURL);
  }
}
