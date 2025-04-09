import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent  {
  constructor(private cartService : CartService){}
  addToCart(item:any){
    this.cartService.add(item).subscribe((s)=>{
      console.log(s);

    })
  }
}
