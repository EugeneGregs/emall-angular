import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  token = localStorage.getItem('authorizationToken') || 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJldWdlbmVncmVnc0BnbWFpbC5jb20iLCJleHAiOjE1NjcxMDY5MTl9.IAvdayyrAfpQH_2NM8Rfs1v7hYypitLeZUr8y3p-pGJ5F8c1bkqNARQgJ3B_ESkNkqgW9ETpbiZYksj3SsOLhw';
  constructor(private http: HttpClient) { }

  getAll(){
    const url = 'http://localhost:8081/api/products/?page=0&size=5&sort=createdAt,desc'
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.token
      })
    };
    return this.http.get(url, httpOptions);
  }
}
