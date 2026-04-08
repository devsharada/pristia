import { DecimalPipe, NgFor, } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from "@angular/router";

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
  selector: 'app-order-placed',
  imports: [DecimalPipe, NgFor, RouterLink],
  templateUrl: './order-placed.component.html',
  styleUrl: './order-placed.component.css'
})
export class OrderPlacedComponent {

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
