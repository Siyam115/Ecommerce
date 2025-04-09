import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent  implements OnInit {
  // Define the form group with form controls
  userForm: FormGroup = new FormGroup({
    id: new FormControl(),
    uName: new FormControl(),
    uEmail: new FormControl(),
    uPass: new FormControl(),
    uStatus: new FormControl(),
    uContact:new FormControl()
  });

  constructor(
    private route: ActivatedRoute, // Access route parameters
    private user_service: UserService, // Inject BookingService
    private router: Router // For navigation
  ) {}

  ngOnInit(): void {
    // Retrieve the booking ID from the route
    const id = this.route.snapshot.params['id'];

    // Fetch booking details by ID and populate the form
    this.user_service.getById(id).subscribe((res: any) => {
      if (res) {
        this.userForm.patchValue(res); // Populate the form fields with response data
      }
    });
  }

  // Save changes and update the booking
  save() {
    this.user_service.updateData(this.userForm.value).subscribe((res: any) => {
      // Navigate back to the book list after updating
      this.router.navigateByUrl('/lUser');
    });
  }
}
