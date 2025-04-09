import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-categorycreate',
  templateUrl: './categorycreate.component.html',
  styleUrls: ['./categorycreate.component.scss']
})
export class CategorycreateComponent implements OnInit {

  constructor(private categoryService: CategoryService, private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  
    categoryForm: FormGroup = new FormGroup({
  
      name: new FormControl(),
      description: new FormControl(),
      
  
    });
  
    save() {
  
      console.log(this.categoryForm.value);
      
      this.categoryService.addCategory(this.categoryForm.value).subscribe((res: any) => {
        this.router.navigateByUrl('/catList');
  
      });
  
  
    }
  }
  