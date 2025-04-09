import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private signupService : LoginService, private router: Router){}

    signupForm : FormGroup = new FormGroup({

      username : new FormControl(),
      pass : new FormControl(),
      role: new FormControl('employee'),
    })


  onSubmit() {
    // console.log('Login works!');
      this.signupService.add(this.signupForm.value).subscribe((res:any)=> {
      this.router.navigateByUrl('/log-in');
      });
   
  }


ngOnInit(): void {
 
}

}
