import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  userName= localStorage.getItem("username")
  constructor(private cartService : CartService){}
  addToCart(item:any){
    this.cartService.add(item).subscribe((s)=>{
      console.log(s);

    })
  }
}
