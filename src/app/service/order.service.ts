import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiURL = "http://localhost:8080/api/orders";


  constructor(private httpClient: HttpClient, private router: Router) { }

  createOrder(user: any) {
    return this.httpClient.post(this.apiURL, user)
  }

  updateOrder(user: any) {
    return this.httpClient.put(this.apiURL + "/" + user.id, user)
  }

  getAll() {
    return this.httpClient.get(this.apiURL);
  }

  getByID(id: any) {
    return this.httpClient.get(this.apiURL + "/" + id);
  }

  deleteByID(id: any) {
    return this.httpClient.delete(this.apiURL + "/" + id);
  }
}

