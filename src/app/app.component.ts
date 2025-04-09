import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Subscription } from 'rxjs';
import { EventBusService } from './_shared/event-bus.service';
import { StorageService } from './service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    constructor(private authservice:AuthService){

    }
    ngOnInit(): void {
      this.subscription = this.authservice.currentMessage.subscribe((message: any) =>
        this.sharedMessage = message
      );
    }
    title = 'authentication';

    sharedMessage: string ='true';
    subscription!:Subscription;
  }


