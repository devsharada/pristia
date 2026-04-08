import { Component, EventEmitter, Output } from '@angular/core';
import { OrderSummaryComponent } from "../order-summary/order-summary.component";

@Component({
  selector: 'app-shipping',
  imports: [OrderSummaryComponent],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent {

   @Output() continue = new EventEmitter<void>();
   @Output() back = new EventEmitter<void>();

  goNext() {
    this.continue.emit();
  }

  previous() {
  this.back.emit();
}
}
