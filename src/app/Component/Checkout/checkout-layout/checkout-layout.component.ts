import { Component } from '@angular/core';
import { InformationComponent } from "../information/information.component";
import { ShippingComponent } from "../shipping/shipping.component";
import { NgIf } from '@angular/common';
import { ConfirmComponent } from "../confirm/confirm.component";
import { OrderPlacedComponent } from "../order-placed/order-placed.component";

@Component({
  selector: 'app-checkout-layout',
  imports: [InformationComponent, ShippingComponent, NgIf, ConfirmComponent, OrderPlacedComponent],
  templateUrl: './checkout-layout.component.html',
  styleUrl: './checkout-layout.component.css'
})
export class CheckoutLayoutComponent {
   activeStep: 'information' | 'shipping' | 'confirm' | 'orderPlaced' = 'information';

  goToShipping() {
    this.activeStep = 'shipping';
  }

  goToConfirm() {
    this.activeStep = 'confirm';
  }

   goToOrderPlaced() {
    this.activeStep = 'orderPlaced';
  }

  goBackToInformation() {
    this.activeStep = 'information';
  }

  goBackToShipping() {
    this.activeStep = 'shipping';
  }

}
