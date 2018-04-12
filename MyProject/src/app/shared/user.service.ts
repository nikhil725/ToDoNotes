import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from '../shared/user.model';
import { Headers } from '@angular/http/src/headers';

@Injectable()
export class UserService {

      rootUrl = "http://localhost:8080/todo/"

       model:any={};
       httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': localStorage.getItem('Authorization')
    })
  };

      public urlpath : string;
  constructor(private http: HttpClient) { }

  // registerUser(user:User){

  //   const body: User = {
      
  //     name : user.name,
  //     password : user.password,
  //     email : user.email
  //   }
  //   return this.http.post(this.rootUrl + '/todo/register', body);

  // }

  registerUser(path,model): Observable<any>{
     console.log(path,model);

     this.urlpath= this.rootUrl.concat(path);
     console.log(this.urlpath,this.httpOptions);

     return this.http.post<any>(this.urlpath,model);
  }

  loginUser(){
    
  }
}
