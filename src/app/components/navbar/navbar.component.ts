import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventBusService } from 'src/app/_shared/event-bus.service';
import { AuthService } from 'src/app/service/auth.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  private roles: any[] = [{roleName:'', roleDescription:''}];
    isLoggedIn = false;
    showAdminBoard = false;
    showModeratorBoard = false;
    showNormalBoard = false;


    header = true;
    username?: string;

    eventBusSub?: Subscription;

    constructor(
      private storageService: StorageService,
      private authService: AuthService,
      private eventBusService: EventBusService
    ) {}

    ngOnInit(): void {
      this.isLoggedIn = this.storageService.isLoggedIn();

      if (this.isLoggedIn) {
        // this.header = true;
        const user = this.storageService.getUser();

        console.log("USer------------",user)
        this.roles = user.roles;

        // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        // this.showAdminBoard = this.roles.some(item => item.roleName === 'ROLE_ADMIN')
        this.showAdminBoard = this.roles.some(item => item === 'ROLE_ADMIN')
        console.log('ROLE_ADMIN---',this.showAdminBoard)

        // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
        // this.showModeratorBoard = this.roles.some(item => item.roleName === 'ROLE_MODERATOR')
        this.showModeratorBoard = this.roles.some(item => item === 'ROLE_MODERATOR')
        console.log('ROLE_MODERATOR---',this.showModeratorBoard)

        this.showNormalBoard = this.roles.includes('ROLE_USER');
        this.showNormalBoard = this.roles.some(item => item.roleName === 'ROLE_USER');
        this.showNormalBoard = this.roles.some(item => item === 'ROLE_USER');

        this.username = user.userName;
      }

      this.eventBusSub = this.eventBusService.on('logout', () => {
        this.logout();
      });
    }

    logout(): void {
      // this.authService.logout().subscribe({
      //   next: res => {
      //     console.log(res);
      //     this.storageService.clean();

      //     window.location.reload();
      //   },
      //   error: err => {
      //     console.log(err);
      //   }
      // });
      this.storageService.clean();
      window.location.reload();

    }
  }
  