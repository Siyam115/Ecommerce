import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidscollectionComponent } from './kidscollection.component';

describe('KidscollectionComponent', () => {
  let component: KidscollectionComponent;
  let fixture: ComponentFixture<KidscollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidscollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidscollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
