import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient) { }

  private url = "http://localhost:8080/api/v1/"

  public addUser(data: any): Observable<any>{
    console.log("Service hit...")
    console.log(data);
    return this.http.post<any>(this.url+"users", data);
  }

  public getUser(): Observable<any>{
    console.log("Service hit...")
    // console.log(data);
    return this.http.get<any>(this.url+"users");
  }

}
