import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-categoryupdate',
  templateUrl: './categoryupdate.component.html',
  styleUrls: ['./categoryupdate.component.scss']
})
export class CategoryupdateComponent implements OnInit {
  constructor(private categoryservice : CategoryService, 
        private router: Router,
        private route: ActivatedRoute
      ){}
  
       categoryForm: FormGroup = new FormGroup({
      
          id:new FormControl(),
          Name: new FormControl(),
          description: new FormControl(),
         
      
        });
        id!: any;
        product!:any;
        
    ngOnInit(): void {
      this.id =this.route.snapshot.params['id'];
        this.categoryservice.getCategoryByID(this.id).subscribe((val:any)=>{
          this.product = val;
          this.categoryForm.setValue(this.product);
        })
   
    }
    save (){
      this.categoryservice.addCategory(this.categoryForm.value).subscribe((res:any)=> {
      this.router.navigateByUrl('/catList');
      
      
      
      });
  
  }
  }
  