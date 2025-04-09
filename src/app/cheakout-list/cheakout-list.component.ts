import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../service/category.service';
import { ChekoutService } from '../service/chekout.service';

@Component({
  selector: 'app-cheakout-list',
  templateUrl: './cheakout-list.component.html',
  styleUrls: ['./cheakout-list.component.scss']
})
export class CheakoutListComponent implements OnInit {

  constructor(private chekoutService: ChekoutService, private router:Router){}
   
   delete(id:any) {
     this,this.chekoutService.deleteByID(id).subscribe((res:any)=>{
      this.ngOnInit();
     })
   }
   
   edit(product: any) {
     // You can now use this 'product' object to populate a form or open a modal for editing
     console.log('Editing product:', product);
     // Example: Navigate to an edit page with the product ID
     this.router.navigate(['/catUpdate', product.id]);
   }
   
      categorylist! : any[];
   
      
      ngOnInit(): void {
   
     this.chekoutService.getAll().subscribe((res:any)=>{
       this.categorylist=res;
   
         });
   
   
   }
   
   }
   


