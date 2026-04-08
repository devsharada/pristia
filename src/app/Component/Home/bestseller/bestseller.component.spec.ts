import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellerComponent } from './bestseller.component';
import { provideRouter } from '@angular/router';

describe('BestsellerComponent', () => {
  let component: BestsellerComponent;
  let fixture: ComponentFixture<BestsellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestsellerComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
