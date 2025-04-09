import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheakoutListComponent } from './cheakout-list.component';

describe('CheakoutListComponent', () => {
  let component: CheakoutListComponent;
  let fixture: ComponentFixture<CheakoutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheakoutListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheakoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
