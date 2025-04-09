import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {
  imageFile: File | null = null;

  onFileSelected(event: any): void {
    this.imageFile = event.target.files[0];
  }

  constructor(private proService: ProductService, private router: Router) { }

  


  productForm: FormGroup = new FormGroup({

    pName: new FormControl(),
    pPrice: new FormControl(),
    pDescription: new FormControl(),
    pCatergory: new FormControl(),
    pImage: new FormControl(),

  });

  save() {

    console.log(this.productForm.value);
    
    const formData = new FormData();

    // Append form fields to the FormData object
    formData.append('pName', this.productForm.value.pName);
    formData.append('pPrice', this.productForm.value.pPrice);
    formData.append('pDescription', this.productForm.value.pDescription);
    formData.append('pCatergory', this.productForm.value.pCatergory);

    // Append the image file
    if (this.imageFile) {
      formData.append('imageFile', this.imageFile, this.imageFile.name);
    }

console.log('--------------------');


    this.proService.addProduct2(formData).subscribe((res: any) => {
      this.router.navigateByUrl('/pList');

    });


  }
}
