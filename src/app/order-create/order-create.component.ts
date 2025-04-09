import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent implements OnInit {

  constructor(private orderService: OrderService, private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  
   orderForm: FormGroup = new FormGroup({
  
    customerName: new FormControl(),
    orderDate: new FormControl(),
    totalAmount: new FormControl(),
  
    });
  
    save() {
  
      console.log(this.orderForm.value);
      
      this.orderService.createOrder(this.orderForm.value).subscribe((res: any) => {
        this.router.navigateByUrl('/orderList');
  
      });
  
  
    }
  }
  