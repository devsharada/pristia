import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { NewsletterComponent } from "../../Home/newsletter/newsletter.component";

interface Product {
  id: number;
  name: string;
  image1: string;
  image2: string;
   price: string;
  link: string;
}

@Component({
  selector: 'app-wishlist',
  imports: [NgFor, RouterLink, NgIf, NewsletterComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
  animations: [
    trigger('fadeAnimation', [
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'scale(0.95)' }))
      ])
    ])
  ]
})
export class WishlistComponent {

   products1: Product[] = [
    {
       id: 1,
      name: 'Silver Ring',
      image1: 'assets/images/product/ring1.png',
      image2: 'assets/images/product/ring3.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
       id: 2,
      name: 'Diamond studded Earring',
      image1: 'assets/images/product/earring1.png',
      image2: 'assets/images/product/ring1.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
       id: 3,
      name: 'Diamond Ring',
      image1: 'assets/images/product/ring2.png',
      image2: 'assets/images/product/ring4.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
  ];

    // Remove item from wishlist
  removeItem(id: number) {
    this.products1 = this.products1.filter(item => item.id !== id);
  }

}
