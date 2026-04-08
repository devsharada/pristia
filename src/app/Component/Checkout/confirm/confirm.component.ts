import { Component, EventEmitter, Output } from '@angular/core';
import { OrderSummaryComponent } from "../order-summary/order-summary.component";

@Component({
  selector: 'app-confirm',
  imports: [OrderSummaryComponent],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css',
})
export class ConfirmComponent {
  @Output() continue = new EventEmitter<void>();
  @Output() backToInformation = new EventEmitter<void>();
  @Output() backToShipping = new EventEmitter<void>();

  goNext() {
    this.continue.emit();
  }

  goBackInfo() {
    this.backToInformation.emit();
  }

  goBackShip() {
    this.backToShipping.emit();
  }
}
