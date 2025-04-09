import { Component, OnInit } from '@angular/core'; 
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  users: any[] = []; // Array to hold the list of users

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.fetchUsers(); // Fetch users when the component initializes
  }

  // Method to fetch the list of users
  fetchUsers(): void {
    this.userService.getAll().subscribe({
      next: (res: any) => {
        this.users = res; // Assign the fetched data to the `users` array
      },
      error: (err: any) => {
        console.error('Error fetching users:', err);
        alert('Failed to fetch users. Please try again later.');
      }
    });
  }

  // Method to delete a user by ID
  delete(id: any): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteById(id).subscribe({
        next: () => {
          this.fetchUsers(); // Refresh the list after deletion
        },
        error: (err: any) => {
          console.error('Error deleting user:', err);
          alert('Failed to delete the user. Please try again.');
        }
      });
    }
  }

  // Method to navigate to the edit page for a specific user
  edit(item: any): void {
    this.router.navigate(['/eUser', item.id]); // Navigate to the edit page with the user's ID
  }
}
