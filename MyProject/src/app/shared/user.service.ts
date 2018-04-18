import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from '../shared/user.model';
import { Headers } from '@angular/http/src/headers';
import {UserNotes } from '../userNotes';

@Injectable()
export class UserService {

      rootUrl = "http://localhost:8080/todoapp/"

       model:any={};
       httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': localStorage.getItem('Authorization')
    })
  };

      public urlpath : string;
  constructor(private http: HttpClient) { } 

  registerUser(path,model): Observable<any>{
     console.log(path,model);

     this.urlpath= this.rootUrl.concat(path);
     console.log(this.urlpath,this.httpOptions);

     return this.http.post<any>(this.urlpath,model, this.httpOptions);
  }

  postService(path, model): Observable<any>{

    this.urlpath = this.rootUrl.concat(path);
    return this.http.post<any>(this.urlpath,model, {observe: 'response'})

  }

  getService(path): Observable<any>{
    
    this.urlpath = this.rootUrl.concat(path);
    console.log(this.httpOptions);
    return this.http.get<UserNotes[]>(this.urlpath,this.httpOptions);   
  }
  deleteService(path): Observable<any>{

    this.urlpath = this.rootUrl.concat(path);
    return this.http.delete<any>(this.urlpath,this.httpOptions);
  }

  putService(path, note): Observable<any>{

    this.urlpath = this.rootUrl.concat(path);
    return this.http.put(this.urlpath, note , this.httpOptions);

  }
  
}
