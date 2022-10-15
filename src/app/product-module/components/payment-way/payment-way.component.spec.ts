import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentWayComponent } from './payment-way.component';

describe('PaymentWayComponent', () => {
  let component: PaymentWayComponent;
  let fixture: ComponentFixture<PaymentWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
