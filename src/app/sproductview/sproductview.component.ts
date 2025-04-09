import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-sproductview',
  templateUrl: './sproductview.component.html',
  styleUrls: ['./sproductview.component.scss']
})
export class SproductviewComponent {
    constructor(private cartService : CartService){}
     addToCart(item:any){
       this.cartService.add(item).subscribe((s)=>{
         console.log(s);

       })
}
}
