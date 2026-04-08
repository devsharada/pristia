import { DecimalPipe, NgFor } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface orderItems {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size: number;
  link: string;
}

@Component({
  selector: 'app-order-summary',
  imports: [FormsModule, NgFor, DecimalPipe],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css',
})
export class OrderSummaryComponent {
  @Output() continue = new EventEmitter<void>();

  orderItems = [
    {
      id: 1,
      name: 'Promise Sterling Silver Ring',
      image: '/assets/images/product/product5.png',
      price: 520,
      quantity: 1,
      size: 10,
      link: '/product-details',
    },
    {
      id: 2,
      name: 'Promise Sterling Silver Ring',
      image: '/assets/images/product/product5.png',
      price: 520,
      quantity: 1,
      size: 10,
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
