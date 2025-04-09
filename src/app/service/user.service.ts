import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
 
  constructor(private httpClient: HttpClient) { }

  private apiURL ="http://localhost:8080/api/user";

  

  getAll() {
   return this.httpClient.get(this.apiURL);
  }

  addData(user : any){
   return this.httpClient.post(this.apiURL,user)
  }

  deleteById(id: any){
   return this.httpClient.delete(this.apiURL+ "/"+ id);
  }

  getById(id : number){
   return this.httpClient.get(this.apiURL+ "/"+ id);
  }

  updateData(user : any){
   return this.httpClient.put(this.apiURL+ "/"+ user.id, user);
  }

}

