import { NgFor, NgIf, NgClass } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop-by-style',
  imports: [NgIf, NgClass, RouterLink, NgFor],
  templateUrl: './shop-by-style.component.html',
  styleUrl: './shop-by-style.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShopByStyleComponent implements AfterViewInit {
  private _activeTab = 1;

 set activeTab(tab: number) {
  this._activeTab = tab;

  // Wait for DOM to update
  setTimeout(() => {
    this.initSwiper(tab);
  }, 0);
}

  get activeTab() {
    return this._activeTab;
  }

  @ViewChild('ringsSwiper', { static: false }) ringsSwiper!: ElementRef;
  @ViewChild('pendantsSwiper', { static: false }) pendantsSwiper!: ElementRef;
  @ViewChild('earringsSwiper', { static: false }) earringsSwiper!: ElementRef;
  private initialized = false;

  rings = [
    {
      name: 'Silver Ring',
      image1: 'assets/images/product/ring1.png',
      image2: 'assets/images/product/ring2.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'Diamond studded Ring',
      image1: 'assets/images/product/ring2.png',
      image2: 'assets/images/product/ring3.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'Diamond Ring',
      image1: 'assets/images/product/ring3.png',
      image2: 'assets/images/product/ring4.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'Diamond Ring',
      image1: 'assets/images/product/ring4.png',
      image2: 'assets/images/product/ring5.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'Silver Diamond Ring',
      image1: 'assets/images/product/ring5.png',
      image2: 'assets/images/product/ring6.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'silver Diamond Ring',
      image1: 'assets/images/product/ring6.png',
      image2: 'assets/images/product/ring1.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
  ];

  pendants = [
    {
      name: 'Penadant Silver with Diamond',
      image1: 'assets/images/product/pendant3.png',
      image2: 'assets/images/product/pendant4.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'Diamond studded pendant',
      image1: 'assets/images/product/pendant4.png',
      image2: 'assets/images/product/pendant5.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'Diamond studded pendant',
      image1: 'assets/images/product/pendant5.png',
      image2: 'assets/images/product/pendant6.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'Diamond Pendant',
      image1: 'assets/images/product/pendant6.png',
      image2: 'assets/images/product/pendant3.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'Diamond studded pendant',
      image1: 'assets/images/product/pendant3.png',
      image2: 'assets/images/product/pendant6.png',
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

  earrings = [
    {
      name: 'Silver Ring',
      image1: 'assets/images/product/earring2.png',
      image2: 'assets/images/product/earring3.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'Diamond studded Earring',
      image1: 'assets/images/product/earring3.png',
      image2: 'assets/images/product/earring4.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'Diamond Ring',
      image1: 'assets/images/product/earring4.png',
      image2: 'assets/images/product/earring5.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'Diamond Pendant',
      image1: 'assets/images/product/earring5.png',
      image2: 'assets/images/product/earring1.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'Diamond Ring',
      image1: 'assets/images/product/earring1.png',
      image2: 'assets/images/product/earring2.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'silver Diamond Pendant',
      image1: 'assets/images/product/earring2.png',
      image2: 'assets/images/product/earring3.png',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
  ];

  private initSwiper(tab: number) {
  let swiperEl: HTMLElement | undefined;
  if (tab === 1) swiperEl = this.ringsSwiper?.nativeElement;
  if (tab === 2) swiperEl = this.pendantsSwiper?.nativeElement;
  if (tab === 3) swiperEl = this.earringsSwiper?.nativeElement;

  if (!swiperEl || (swiperEl as any).swiper) return;

  const config = {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: true,
    speed: 500,
    grabCursor: true,
    freeMode: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 10 },
      640: { slidesPerView: 3, spaceBetween: 15 },
      992: { slidesPerView: 4, spaceBetween: 15 },
      1200: { slidesPerView: 5, spaceBetween: 20 },
    },
  };

  Object.assign(swiperEl, config);

  setTimeout(() => {
    (swiperEl as any).initialize?.();
    swiperEl.addEventListener('mouseenter', () =>
      (swiperEl as any).swiper.autoplay?.stop()
    );
    swiperEl.addEventListener('mouseleave', () =>
      (swiperEl as any).swiper.autoplay?.start()
    );
  });
}

  ngAfterViewInit() {
    // Initialize the first tab (activeTab = 1) Swiper
    setTimeout(() => {
      this.initSwiper(this.activeTab);
    }, 0);
  }
}
