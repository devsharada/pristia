import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurValueComponent } from './our-value.component';

describe('OurValueComponent', () => {
  let component: OurValueComponent;
  let fixture: ComponentFixture<OurValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
