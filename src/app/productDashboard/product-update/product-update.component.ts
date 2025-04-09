import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  constructor(private st_service : ProductService, 
      private router: Router,
      private route: ActivatedRoute
    ){}

     productForm: FormGroup = new FormGroup({
    
        id:new FormControl(),
        pName: new FormControl(),
        pPrice: new FormControl(),
        pDescription: new FormControl(),
        pCategory: new FormControl(),
        pImage: new FormControl(),
    
      });
      id!: any;
      product!:any;
      
  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];
      this.st_service.getByID(this.id).subscribe((val:any)=>{
        this.product = val;
        this.productForm.setValue(this.product);
      })
 
  }
  save (){
    this.st_service.addProduct(this.productForm.value).subscribe((res:any)=> {
    this.router.navigateByUrl('/pList');
    
    
    
    });

}
}
