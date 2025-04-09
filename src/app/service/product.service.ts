import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   private apiURL = "http://localhost:8080/api/crud";
  
  
      constructor(private httpClient: HttpClient, private router: Router) { }
  
      addProduct(user: any) {
        return this.httpClient.post(this.apiURL, user)
      }
  
      
      addProduct2(user: any) {
        return this.httpClient.post("http://localhost:8080/v1/image/product", user)
      }
      updateData(user: any) {
        return this.httpClient.put(this.apiURL + "/" + user.id, user)
      }
  
      getAll() {
        return this.httpClient.get(this.apiURL);
      }
  
      getByID(id: any) {
        return this.httpClient.get(this.apiURL + "/" + id);
      }
  
      deleteByID(id: any) {
        return this.httpClient.delete(this.apiURL + "/delete/" + id);
      }
}
