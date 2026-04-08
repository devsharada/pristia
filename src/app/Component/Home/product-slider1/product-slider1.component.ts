import { NgFor } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild, } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-slider1',
  imports: [NgFor, RouterLink],
  templateUrl: './product-slider1.component.html',
  styleUrl: './product-slider1.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductSlider1Component implements AfterViewInit {
  @ViewChild('swiperRef', { static: false }) swiperRef!: ElementRef;
  private initialized = false;

 products1 = [
    {
      name: 'Silver Ring',
      image1: 'assets/images/product/ring1.png',
      image2: 'assets/images/product/ring3.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'Diamond studded Earring',
      image1: 'assets/images/product/earring1.png',
      image2: 'assets/images/product/ring1.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'Diamond Ring',
      image1: 'assets/images/product/ring2.png',
      image2: 'assets/images/product/ring4.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'Diamond Pendant',
      image1: 'assets/images/product/pendant1.png',
      image2: 'assets/images/product/pendant2.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'Diamond Ring',
      image1: 'assets/images/product/ring2.png',
      image2: 'assets/images/product/ring3.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'silver Diamond Pendant',
      image1: 'assets/images/product/pendant1.png',
      image2: 'assets/images/product/pendant2.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
  ];

  private initSwiper() {
    if (this.initialized) return;
    const swiperEl = this.swiperRef?.nativeElement as any;
    if (!swiperEl) return;

    Object.assign(swiperEl, {
      slidesPerView: 6,
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
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
      },
      breakpoints: {
        320: { slidesPerView: 2, spaceBetween: 10 },
        640: { slidesPerView: 3, spaceBetween: 15 },
        992: { slidesPerView: 4, spaceBetween: 15 },
        1200: { slidesPerView: 5, spaceBetween: 20 },
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

