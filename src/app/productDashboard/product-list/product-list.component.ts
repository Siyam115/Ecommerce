import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor(private proservice: ProductService,private router:Router){}

delete(id:any) {
  this,this.proservice.deleteByID(id).subscribe((res:any)=>{
   this.ngOnInit();
  })
}

editProduct(product: any) {
  // You can now use this 'product' object to populate a form or open a modal for editing
  console.log('Editing product:', product);
  // Example: Navigate to an edit page with the product ID
  this.router.navigate(['/pUpdate', product.id]);
}

   proList! : any[];

   
   ngOnInit(): void {

  this.proservice.getAll().subscribe((res:any)=>{
    this.proList=res;

      });


}

getUrl(arg0: any) {
  // "src/main/resources/static/"
  const img = "http://localhost:8080/" + arg0.replace("src/main/resources/static/","");
  console.log(img, '---------------image----------------img');
  return img;
}

}
