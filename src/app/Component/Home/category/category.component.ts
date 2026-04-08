import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [NgFor, RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  categories = [
    { name: 'Rings', image: 'assets/images/home/ring.png', link: '/rings' },
    {
      name: 'Earrings',
      image: 'assets/images/home/earring.png',
      link: '/earrings',
    },
    {
      name: 'Pendants',
      image: 'assets/images/home/pendant.png',
      link: '/pendants',
    },
    {
      name: 'Anklets',
      image: 'assets/images/home/anklet.png',
      link: '/anklets',
    },
    {
      name: 'Bracelets',
      image: 'assets/images/home/bracelet.png',
      link: '/bracelets',
    },
  ];
}
