import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SproductviewComponent } from './sproductview.component';

describe('SproductviewComponent', () => {
  let component: SproductviewComponent;
  let fixture: ComponentFixture<SproductviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SproductviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SproductviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
