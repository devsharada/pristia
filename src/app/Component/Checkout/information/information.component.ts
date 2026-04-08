import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OrderSummaryComponent } from "../order-summary/order-summary.component";

@Component({
  selector: 'app-information',
  imports: [RouterLink, OrderSummaryComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {

  @Output() continue = new EventEmitter<void>();

  goNext() {
    this.continue.emit();
  }
}
