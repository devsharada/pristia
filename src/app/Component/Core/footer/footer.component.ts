import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [NgClass, NgIf, NgFor, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  accordion = {
    quick1: false,
    quick2: false,
  };

  toggleAccordion(key: 'quick1' | 'quick2') {
    this.accordion[key] = !this.accordion[key];
  }

  socialMediaLinks = [
    { path: '/assets/images/home/facebook.png', name: 'Facebook', url: '' },
    { path: '/assets/images/home/twitter.png', name: 'Twitter', url: '' },
    { path: '/assets/images/home/instagram.png', name: 'Instagram', url: '' },
    { path: '/assets/images/home/youtube.png', name: 'Youtube', url: '' },
  ];

   // copyright year
  currentYear: number = new Date().getFullYear();

  // scroll to Top
  showButton = false;

  // Detect scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.pageYOffset > 300; // show after scrolling 300px
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
