import { DecimalPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TrackOrderComponent } from '../track-order/track-order.component';

interface OrderItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  link: string;
}

interface OrderTrackingStep {
  name: string;
  icon: string;
  datetime: string;
  location: string;
}

interface Order {
  orderId: string;
  orderDate: string;
  status: string;
  items: OrderItem[];
  tracking?: OrderTrackingStep[];
}

@Component({
  selector: 'app-orders',
  imports: [NgFor, RouterLink, DecimalPipe, NgClass, TrackOrderComponent, NgIf],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  orders: Order[] = [
    {
      orderId: 'BD12345678',
      orderDate: '26 Sep, 2025',
      status: 'In Transit',
      items: [
        {
          id: 1,
          name: 'Promise Sterling Silver Ring',
          image: '/assets/images/product/product5.png',
          price: 520,
          quantity: 1,
          link: '/product-details',
        },
        {
          id: 2,
          name: 'Promise Sterling Silver Ring',
          image: '/assets/images/product/product5.png',
          price: 520,
          quantity: 2,
          link: '/product-details',
        },

      ],
      tracking: [
        {
          name: 'Order Placed',
          icon: '/assets/images/home/placed.png',
          datetime: '29 Sep 2025, 09:45',
          location: 'Marvel Fugo, Pune',
        },
        {
          name: 'Dispatched',
          icon: '/assets/images/home/dispatched.png',
          datetime: '29 Sep 2025, 09:45',
          location: 'Marvel Fugo, Pune',
        },
        {
          name: 'In Transit',
          icon: '/assets/images/home/intransit.png',
          datetime: '29 Sep 2025, 10:12',
          location: 'Warehouse, Pune',
        },
        {
          name: 'Out For Delivery',
          icon: '/assets/images/home/out-for-delivery.png',
          datetime: '',
          location: '',
        },
        {
          name: 'Delivered',
          icon: '/assets/images/home/delivered.png',
          datetime: '',
          location: '',
        },
        {
          name: 'Returned',
          icon: '/assets/images/home/return.png',
          datetime: '',
          location: '',
        },
        {
          name: 'Cancelled',
          icon: '/assets/images/home/cancelled.png',
          datetime: '',
          location: '',
        },
      ],
    },
    {
      orderId: 'BD12345679',
      orderDate: '15 Sep, 2025',
      status: 'Delivered',
      items: [
        {
          id: 3,
          name: 'Promise Sterling Silver Ring',
          image: '/assets/images/product/product5.png',
          price: 520,
          quantity: 1,
          link: '/product-details',
        },
      ],
      tracking: [
        {
          name: 'Order Placed',
          icon: '/assets/images/home/placed.png',
          datetime: '15 Sep 2025, 08:00',
          location: 'Warehouse, Pune',
        },
        {
          name: 'Dispatched',
          icon: '/assets/images/home/dispatched.png',
          datetime: '15 Sep 2025, 08:00',
          location: 'Warehouse, Pune',
        },
        {
          name: 'In Transit',
          icon: '/assets/images/home/intransit.png',
          datetime: '15 Sep 2025, 09:30',
          location: 'Mumbai Hub',
        },
        {
          name: 'Out For Delivery',
          icon: '/assets/images/home/out-for-delivery.png',
          datetime: '15 Sep 2025, 11:00',
          location: 'Delivery Hub, Pune',
        },
        {
          name: 'Delivered',
          icon: '/assets/images/home/delivered.png',
          datetime: '15 Sep 2025, 14:15',
          location: 'Customer Address, Pune',
        },
        {
          name: 'Returned',
          icon: '/assets/images/home/return.png',
          datetime: '',
          location: '',
        },
        {
          name: 'Cancelled',
          icon: '/assets/images/home/cancelled.png',
          datetime: '',
          location: '',
        },
      ],
    },
  ];

  selectedOrder: Order | null = null;

  getStatusIcon(status: string): string {
    switch (status) {
      case 'Order Placed':
        return '/assets/images/home/placed.png';
      case 'Dispatched':
        return '/assets/images/home/dispatched.png';
      case 'In Transit':
        return '/assets/images/home/intransit.png';
      case 'Out For Delivery':
        return '/assets/images/home/out-for-delivery.png';
      case 'Delivered':
        return '/assets/images/home/delivered.png';
      case 'Returned':
        return '/assets/images/home/return.png';
      case 'Cancelled':
        return '/assets/images/home/cancelled.png';
      default:
        return '/assets/images/home/Processing.png';
    }
  }

  getOrderTotal(order: Order): number {
    return order.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  getItemTotal(item: OrderItem): number {
    return item.price * item.quantity;
  }

  openTracking(order: Order) {
    this.selectedOrder = order;
  }

  closeTracking() {
    this.selectedOrder = null;
  }

  // for pagination
  currentPage = 1;
  itemsPerPage = 4;

  get totalItems(): number {
    return this.orders.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get paginatedOrders() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.orders.slice(start, start + this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
