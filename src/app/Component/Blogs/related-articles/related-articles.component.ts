import { NgFor } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-related-articles',
  imports: [RouterLink, NgFor],
  templateUrl: './related-articles.component.html',
  styleUrl: './related-articles.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RelatedArticlesComponent implements AfterViewInit {
  @ViewChild('swiperRef', { static: false }) swiperRef!: ElementRef;
  private initialized = false;

relatedBlogs = [
    {
      img: '/assets/images/blogs/blog16.png',
      alt: 'emerald blog',
      link: '/blogs/blog-details',
      title: 'Emerald vs. Sapphire: Which Precious Stone Should You Choose?',
      content:
        'Compare the beauty, durability, and value of emeralds and sapphires to make the perfect choice for your jewelry collection.',
      date: 'Oct 13, 2023',
    },
    {
      img: '/assets/images/blogs/blog17.png',
      alt: 'emerald blog',
      link: '/blogs/blog-details',
      title: 'Emerald vs. Sapphire: Which Precious Stone Should You Choose?',
      content:
        'Compare the beauty, durability, and value of emeralds and sapphires to make the perfect choice for your jewelry collection.',
      date: 'Oct 13, 2023',
    },
    {
      img: '/assets/images/blogs/blog18.png',
      alt: 'emerald blog',
      link: '/blogs/blog-details',
      title: 'Emerald vs. Sapphire: Which Precious Stone Should You Choose?',
      content:
        'Compare the beauty, durability, and value of emeralds and sapphires to make the perfect choice for your jewelry collection.',
      date: 'Oct 13, 2023',
    },
    {
      img: '/assets/images/blogs/blog17.png',
      alt: 'emerald blog',
      link: '/blogs/blog-details',
      title: 'Emerald vs. Sapphire: Which Precious Stone Should You Choose?',
      content:
        'Compare the beauty, durability, and value of emeralds and sapphires to make the perfect choice for your jewelry collection.',
      date: 'Oct 13, 2023',
    },
  ];

  private initSwiper() {
    if (this.initialized) return;
    const swiperEl = this.swiperRef?.nativeElement as any;
    if (!swiperEl) return;

    Object.assign(swiperEl, {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      speed: 500,
      grabCursor: true,
      freeMode: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false, // autoplay resumes after interaction
      },
      navigation: {
        nextEl: '.blog-button-next',
        prevEl: '.blog-button-prev',
      },
      breakpoints: {
        320: { slidesPerView: 2, spaceBetween: 10 },
        640: { slidesPerView: 3, spaceBetween: 15 },
        992: { slidesPerView: 3, spaceBetween: 15 },
      },
    });

    setTimeout(() => {
      swiperEl.initialize?.();
      this.initialized = true;

      // Pause autoplay on hover
      swiperEl.addEventListener('mouseenter', () =>
        swiperEl.swiper.autoplay?.stop()
      );
      swiperEl.addEventListener('mouseleave', () =>
        swiperEl.swiper.autoplay?.start()
      );
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initSwiper();
    }, 0);
  }
}
