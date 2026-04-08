import { Component } from '@angular/core';
import { NewsletterComponent } from "../../Home/newsletter/newsletter.component";
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface Article {
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean; // if true → image on right, text on left
  link: string;
}

@Component({
  selector: 'app-blog',
  imports: [NewsletterComponent, NgFor, RouterLink, NgIf, NgClass],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        query('a', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(150, [
            animate('700ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class BlogComponent {

  blogs = [
    {
      date: 'August 15, 2023',
      title: 'Timeless Treasures: Must-Have Jewelry Pieces for Every Woman',
      summary: 'Discover how each jewelry piece is crafted with precision, blending traditional artistry with modern trends. From intricate necklaces to statement rings, our collections celebrate elegance that never fades.',
      imageUrl: 'assets/images/blogs/blog11.png',
      link: '/blogs/blog-details',
    },
    {
      date: 'August 15, 2023',
      title: 'From Tradition to Trend: The Evolution of Modern Jewelry',
      summary: 'Each gemstone tells a story — of rarity, beauty, and craftsmanship. Learn how we source and design every stone to bring out its natural brilliance and add a touch of luxury to your everyday look.',
      imageUrl: 'assets/images/blogs/blog12.png',
      link: '/blogs/blog-details',
    },
    {
      date: 'August 15, 2023',
      title: 'A Guide to Choosing the Perfect Gemstone for You',
      summary: 'Your jewelry deserves the best care. Explore our expert tips on cleaning, storing, and maintaining your ornaments to ensure they shine beautifully for years to come.',
      imageUrl: 'assets/images/blogs/blog11.png',
      link: '/blogs/blog-details',
    },
  ]

  articles: Article[] = [
    {
      category: 'For Rings',
      date: 'Apr 8, 2023',
      title: 'Styling Secrets: How to Layer Jewelry Like a Pro',
      description: `Layering jewelry is an art that instantly elevates any look, whether casual or glamorous.
      By combining delicate chains, bold pendants, or stackable rings, you can create a style that reflects your personality.
      The trick is to balance lengths, textures, and metals, ensuring that every piece complements the other without overwhelming your outfit.`,
      image: '/assets/images/blogs/blog8.png',
      link: '/blogs/blog-details',
    },
    {
      category: 'For Pendants',
      date: 'Apr 8, 2023',
      title: 'The Meaning Behind Popular Gemstones and Their Powers',
      description: `Jewelry is not only about beauty but also about the energy it carries.
      Each gemstone has a story and significance—amethyst is believed to bring calmness, emerald symbolizes love and growth,
      while ruby reflects passion and power. Wearing gemstone jewelry allows you to express your personality while embracing the positive vibes and symbolism that each stone holds.`,
      image: '/assets/images/blogs/blog9.png',
      link: '/blogs/blog-details',
      reverse: true // Image on right side
    },
    {
      category: 'For Bracelet',
      date: 'Apr 8, 2023',
      title: 'Occasion Jewelry: Choosing the Right Piece for Every Celebration',
      description: `Every occasion calls for a unique sparkle. From weddings and festivals to birthdays and anniversaries,
      jewelry plays a big role in making moments memorable. Statement pieces like chandbali earrings for festive nights
      or elegant diamond studs for corporate events help set the tone. Choosing the right jewelry not only enhances your outfit
      but also makes you feel confident and radiant.`,
      image: '/assets/images/blogs/blog10.png',
      link: '/blogs/blog-details',
    },
  ];
}
