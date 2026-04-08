import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-our-value',
  imports: [NgFor],
  templateUrl: './our-value.component.html',
  styleUrl: './our-value.component.css'
})
export class OurValueComponent {

  values = [
    {
      image: 'assets/images/about/knowledge.png',
      title: 'Knowledge',
      description: 'With deep expertise in gems and metals, we bring authenticity and trust to every creation.'
    },
    {
      image: 'assets/images/about/creative.png',
      title: 'Creative',
      description: 'Innovative designs that blend tradition with modern trends, making every jewel truly unique.'
    },
    {
      image: 'assets/images/about/passion.png',
      title: 'Passion',
      description: 'Crafted with love and dedication, our jewelry reflects the passion of skilled artisans.'
    },
    {
      image: 'assets/images/about/experienced.png',
      title: 'Experienced',
      description: 'Years of craftsmanship ensure each piece carries quality, elegance, and lasting value.'
    }
  ]

}
