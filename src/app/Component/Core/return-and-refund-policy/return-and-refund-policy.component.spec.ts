import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnAndRefundPolicyComponent } from './return-and-refund-policy.component';

describe('ReturnAndRefundPolicyComponent', () => {
  let component: ReturnAndRefundPolicyComponent;
  let fixture: ComponentFixture<ReturnAndRefundPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturnAndRefundPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnAndRefundPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
