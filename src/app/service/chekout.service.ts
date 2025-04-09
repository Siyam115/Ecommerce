import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChekoutService {

  private apiURL = 'http://localhost:8080/api/checkout'; // Spring Boot API endpoint

  constructor(private httpClient: HttpClient, private router: Router) { }
  
  addPayment(user: any) {
    return this.httpClient.post(this.apiURL, user)
  }

  updatePayment(user: any, value: any) {
    return this.httpClient.put(this.apiURL + "/" + user.id, user)
  }

  getAll() {
    return this.httpClient.get(this.apiURL);
  }

  getPaymentByID(id: any) {
    return this.httpClient.get(this.apiURL + "/" + id);
  }

  deleteByID(id: any) {
    return this.httpClient.delete(this.apiURL + "/delete/" + id);
  }
}

