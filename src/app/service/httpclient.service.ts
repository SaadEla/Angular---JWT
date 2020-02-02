import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Employee{
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
    public salary:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     

     getEmployees()
  {
    let username='javainuse'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJleHAiOjE1ODA2ODAzNjYsImlhdCI6MTU4MDY2MjM2Nn0.rK5upSSjGUqd07Wj1bK9fNdZp1a838xDO8lQJNKaVdAfNtTiHRG35RmcjypZ_TCI1v1RsMjVo_4nr-dpgg-gSA ' + btoa(username + ':' + password) });
    
       return this.httpClient.get<Employee[]>('http://localhost:8080/employees',{headers});
  }

  public deleteEmployee(employee) {
    let username='javainuse'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJleHAiOjE1ODA2Nzk1MTQsImlhdCI6MTU4MDY2MTUxNH0.0LFqvTQFBT7v2J4eSZzSfK8V-VxuIr3OZiEQPXNzfkUjFvEeXU8pHmXjwSmrjeQUPjsjzuMFx1g9wBONdR7aoA ' + btoa(username + ':' + password) });
    return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/"+ employee.empId,{headers});
  }

  public createEmployee(employee) {
    let username='javainuse'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJleHAiOjE1ODA2Nzk1MTQsImlhdCI6MTU4MDY2MTUxNH0.0LFqvTQFBT7v2J4eSZzSfK8V-VxuIr3OZiEQPXNzfkUjFvEeXU8pHmXjwSmrjeQUPjsjzuMFx1g9wBONdR7aoA ' + btoa(username + ':' + password) });
    return this.httpClient.post<Employee>("http://localhost:8080/employees", employee,{headers});
  }
}