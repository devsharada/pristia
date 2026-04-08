import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopByStyleComponent } from './shop-by-style.component';
import { provideRouter } from '@angular/router';

describe('ShopByStyleComponent', () => {
  let component: ShopByStyleComponent;
  let fixture: ComponentFixture<ShopByStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopByStyleComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopByStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
