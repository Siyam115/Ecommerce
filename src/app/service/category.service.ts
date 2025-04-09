import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  deleteCategory(id: any) {
    throw new Error('Method not implemented.');
  }

  private apiURL = 'http://localhost:8080/api/categories'; // Spring Boot API endpoint

  constructor(private httpClient: HttpClient, private router: Router) { }
  
  addCategory(user: any) {
    return this.httpClient.post(this.apiURL, user)
  }

  updateCategory(user: any, value: any) {
    return this.httpClient.put(this.apiURL + "/" + user.id, user)
  }

  getAllCategory() {
    return this.httpClient.get(this.apiURL);
  }

  getCategoryByID(id: any) {
    return this.httpClient.get(this.apiURL + "/" + id);
  }

  deleteByID(id: any) {
    return this.httpClient.delete(this.apiURL + "/delete/" + id);
  }
}
