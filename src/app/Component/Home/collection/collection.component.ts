import { NgFor } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild, } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-collection',
  imports: [RouterLink, NgFor],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CollectionComponent implements AfterViewInit {
  @ViewChild('swiperRef', { static: false }) swiperRef!: ElementRef;
  private initialized = false;

  collections=[
    {
      image:"assets/images/home/gold-collection.png",
      alt:"Gold collection",
      link:"#",
    },
    {
      image:"assets/images/home/diamond-collection.png",
      alt:"Diamond collection",
      link:"#",
    },
    {
      image:"assets/images/home/silver-collection.png",
      alt:"Silver collection",
      link:"#",
    },
    {
      image:"assets/images/home/all-rings-collection.png",
      alt:"All rings collection",
      link:"#",
    },
    {
      image:"assets/images/home/gold-silver-collection.png",
      alt:"Gold Silver collection",
      link:"#",
    },
  ]

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
      breakpoints: {
        320: { slidesPerView: 2, spaceBetween: 10 },
        640: { slidesPerView: 3, spaceBetween: 15 },
        992: { slidesPerView: 4, spaceBetween: 15 },
        1200: { slidesPerView: 4, spaceBetween: 20 },
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
