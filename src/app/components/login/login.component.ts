import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
// export class LoginComponent {

//   constructor(private loginservice: LoginService, private router: Router,private authService: AuthService) { }

//   loginForm: FormGroup = new FormGroup({

//     username: new FormControl(),
//     pass: new FormControl(),

//   })
//   userList: any[] = [];
//   onSubmit() {
//     // console.log(this.loginForm.value);
//     this.loginservice.getAll().subscribe((res: any) => {
//       this.userList = res;
//       // console.log(res);

//       let flag = false;

//       for (let i = 0; i < this.userList.length; i++) {
//         // console.log(this.loginForm.value.lusername + " "+ this.userList[i].lusername);


//         if (this.loginForm.value.username == this.userList[i].username &&
//           this.loginForm.value.pass == this.userList[i].pass) {
//           localStorage.setItem("isLogin", "true");
//           localStorage.setItem("username", this.userList[i].username);
//           localStorage.setItem("role", this.userList[i].role);

//           flag = true;

//         }
//       }

//       if (flag == true) {
//         this.authService.changeMessage("true")
//         this.router.navigateByUrl('/home');
//       } else {
//         alert("Incorrect username or password!")
//       }
//     });
//   }

// }

export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: any[] = [];
  username: string=''
loginForm: any;

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.username = this.storageService.getUser().userName;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    // console.log("Role---- -- -- ", this.form)

    this.authService.login(username, password).subscribe({
      
      next: data => {
        // console.log("Role---- -- -- ",data)
        this.reloadPage();
        this.storageService.saveUser(data);
        console.log("Role---- -- -- ",this.storageService.getUser().role)

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().role;

        const user = this.storageService.getUser();

        // console.log("user-----",user)

        this.username = this.storageService.getUser().userName;
        console.log("user name-----",this.username)
     
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}