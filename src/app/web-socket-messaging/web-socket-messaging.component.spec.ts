import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSocketMessagingComponent } from './web-socket-messaging.component';

describe('WebSocketMessagingComponent', () => {
  let component: WebSocketMessagingComponent;
  let fixture: ComponentFixture<WebSocketMessagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebSocketMessagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebSocketMessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
