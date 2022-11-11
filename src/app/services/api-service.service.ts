import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  public driverUrl = environment.url1;

  constructor(
    private http: HttpClient
  ) { }

  signupUser =(userDetail:any)=>{
    const body = JSON.stringify(userDetail);
    const headers ={'content-type': 'application/json'};
    return this.http.post<any>(`${this.driverUrl}/signup`, body,{'headers':headers});
  }

  signinUser =(userDetail:any)=>{
    const body = JSON.stringify(userDetail);
    const headers ={'content-type': 'application/json'};
    return this.http.post<any>(`${this.driverUrl}/signin`, body,{'headers':headers});
  }

  signupDriver =(userDetail:any)=>{
    const body = JSON.stringify(userDetail);
    const headers ={'content-type': 'application/json'};
    return this.http.post<any>(`${this.driverUrl}/signup`, body,{'headers':headers});
  }

  signinDriver =(userDetail:any)=>{
    const body = JSON.stringify(userDetail);
    const headers ={'content-type': 'application/json'};
    return this.http.post<any>(`${this.driverUrl}/signin`, body,{'headers':headers});
  }

  signupAdmin =(userDetail:any)=>{
    const body = JSON.stringify(userDetail);
    const headers ={'content-type': 'application/json'};
    return this.http.post<any>(`${this.driverUrl}/signup`, body,{'headers':headers});
  }

  signinAdmin =(userDetail:any)=>{
    const body = JSON.stringify(userDetail);
    const headers ={'content-type': 'application/json'};
    return this.http.post<any>(`${this.driverUrl}/signin`, body,{'headers':headers});
  }

}

