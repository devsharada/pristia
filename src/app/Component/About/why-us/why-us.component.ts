import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-us',
  imports: [NgFor],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css'
})
export class WhyUsComponent {

    values = [
    {
      image: 'assets/images/about/good-material.png',
      title: 'Good Material',
      description: 'Your trusted jeweler for quality and authenticity. Where craftsmanship meets everlasting beauty.'
    },
    {
      image: 'assets/images/about/professional-expert.png',
      title: 'Professional Expert',
      description: 'Your trusted jeweler for quality and authenticity. Where craftsmanship meets everlasting beauty.'
    },
    {
      image: 'assets/images/about/premium-support.png',
      title: '24/7 Premium Support',
      description: 'Crafted with love and dedication, our jewelry reflects the passion of skilled artisans.'
    },
  ]

}
