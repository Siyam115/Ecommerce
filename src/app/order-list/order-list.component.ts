import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  constructor(private orderService: OrderService,private router:Router){}
 
 delete(id:any) {
   this,this.orderService.deleteByID(id).subscribe((res:any)=>{
    this.ngOnInit();
   })
 }
 
 edit(order: any) {
   // You can now use this 'product' object to populate a form or open a modal for editing
   console.log('Editing product:', order);
   // Example: Navigate to an edit page with the product ID
   this.router.navigate(['/catUpdate', order.id]);
 }
 
    orderlist! : any[];
 
    
    ngOnInit(): void {
 
   this.orderService.getAll().subscribe((res:any)=>{
     this.orderlist=res;
 
       });
 
 
 }
 
 }
 