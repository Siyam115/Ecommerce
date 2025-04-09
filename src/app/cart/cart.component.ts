import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService, private router: Router, private storageService: StorageService) { }

  subtotal: number = 4560;
  shippingFee: number = 100;
  voucherCode: string = '';
  discount: number = 0;

  // get total(): number {
  //   return this.subtotal + this.shippingFee - this.discount;
  // }

  applyVoucher() {
    if (this.voucherCode.trim().toUpperCase() === 'DISCOUNT10') {
      this.discount = 100; // Example: Apply a 100 currency unit discount
    } else {
      this.discount = 0;
      alert('Invalid voucher code');
    }
  }

  cart = [
    { title: 'Product 1', para: 'Description of product 1', price: 100, quantity: 1 },
    { title: 'Product 2', para: 'Description of product 2', price: 200, quantity: 1 },
    // other items
  ];
  ngOnInit(): void {
    this.cartService.getAll().subscribe((s:any)=>{
      this.cart = s;
    })
  }
  // cart: any[] = []

  removeFromCart(index: number, item: any) {
    this.cart.splice(index, 1);
    this.cartService.deleteByID(item.id).subscribe();
  }

  // getTotal() {
  //   return this.cart.reduce((sum, item) => sum + item.price, 0);
  // }

  get total(): number {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  increaseQuantity(index: number): void {
    this.cart[index].quantity += 1;
    this.updateTotal();
  }

  decreaseQuantity(index: number): void {
    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity -= 1;
    }
    this.updateTotal();
  }

  updateTotal(): void {
    // Total is automatically updated when quantity changes via getTotal()
  }

  // removeFromCart(index: number, item: any): void {
  //   this.cart.splice(index, 1);
  // }


  checkout() {
    alert('Proceeding to checkout!');
  }

  selectPackage(packageData: any) {
    this.cartService.getAll();

    if (this.storageService.isLoggedIn()) {
      this.router.navigateByUrl('/checkout');

    } else {
      this.router.navigateByUrl('/log-in');
    }

  }
}
