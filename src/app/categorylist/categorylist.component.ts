import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.scss']
})
export class CategorylistComponent implements OnInit {
  constructor(private categoryService: CategoryService,private router:Router){}
 
 delete(id:any) {
   this,this.categoryService.deleteByID(id).subscribe((res:any)=>{
    this.ngOnInit();
   })
 }
 
 editCategory(product: any) {
   // You can now use this 'product' object to populate a form or open a modal for editing
   console.log('Editing product:', product);
   // Example: Navigate to an edit page with the product ID
   this.router.navigate(['/catUpdate', product.id]);
 }
 
    categorylist! : any[];
 
    
    ngOnInit(): void {
 
   this.categoryService.getAllCategory().subscribe((res:any)=>{
     this.categorylist=res;
 
       });
 
 
 }
 
 }
 