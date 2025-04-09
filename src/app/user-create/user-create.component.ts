import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  
  
    userForm: FormGroup = new FormGroup({
  
      uName: new FormControl(),
      uEmail: new FormControl(),
      uPass: new FormControl(),
      uStatus: new FormControl(),
      uContact:new FormControl()
     
  
    });
  
    save() {
  
      console.log(this.userForm.value);
      
      this.userService.addData(this.userForm.value).subscribe((res: any ) => {
        this.router.navigateByUrl('/uList');
  
      });
  
  
    }

}
