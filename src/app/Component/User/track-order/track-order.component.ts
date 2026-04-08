import { DecimalPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

interface TrackingStep {
  name: string;
  icon: string;
  datetime: string;
  location: string;
}

interface orderItems {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  link: string;
}
@Component({
  selector: 'app-track-order',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, DecimalPipe],
  templateUrl: './track-order.component.html',
  styleUrl: './track-order.component.css',
})
export class TrackOrderComponent {
  @Input() currentStatus!: string;
  @Input() close!: () => void;
  @Input() steps: TrackingStep[] = [];

  isCompleted(step: string): boolean {
    const orderFlow = ['Order Placed', 'Dispatched', 'In Transit', 'Out For Delivery', 'Delivered'];
    const currentIndex = orderFlow.indexOf(this.currentStatus);
    const stepIndex = orderFlow.indexOf(step);
    return stepIndex !== -1 && stepIndex <= currentIndex;
  }

  isActive(step: string): boolean {
    return step === this.currentStatus;
  }

  orderItems = [
     {
      id: 1,
      name: 'Modern Muse Natural Emerald Ring',
      image: '/assets/images/product/product5.png',
      price: 207000,
      quantity: 1,
      link: '/product-details',
    },
     {
      id: 1,
      name: 'Brilliant Round White Diamond',
      image: '/assets/images/product/product5.png',
      price: 100000,
      quantity: 2,
      link: '/product-details',
    },
  ];

   // for single product price according to qty
  getItemTotal(item: orderItems): number {
    return item.price * item.quantity;
  }

  // all product price
  getCartTotal(): number {
    return this.orderItems.reduce(
      (total, item) => total + this.getItemTotal(item),
      0
    );
  }

  // for shiipping & tax
  shippingCharge = 100; // or dynamic from API
  tax = 0;

  // for total price including shipping & tax
  getFinalTotal(): number {
    return this.getCartTotal() + this.shippingCharge + this.tax;
  }
}
