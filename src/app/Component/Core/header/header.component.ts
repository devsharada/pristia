import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { AuthComponent } from "../../Unauth/auth/auth.component";

interface NavItem {
  label: string;
  path: string;
}

interface MegaMenuItem {
  label: string;
  path: string;
  image?: string;
}

interface MegaMenuSection {
  title: string;
  items: MegaMenuItem[];
}

interface MegaMenuCategory {
  title: string;
  items: MegaMenuItem[];
}

@Component({
  selector: 'app-header',
  imports: [NgIf, NgFor, RouterLink, RouterLinkActive, AuthComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // login popup functionality

  isAuthOpen = false;
  activeAuthTab: 'login' | 'register' = 'login';
  openTopAccordionIndex: number | null | undefined;

  openAuth(tab: 'login' | 'register' = 'login') {
    this.activeAuthTab = tab;
    this.isAuthOpen = true;
  }

  closeAuth() {
    this.isAuthOpen = false;
  }

  // search bar toggle
  showSearchBar = false;

  toggleSearchBar() {
    this.showSearchBar = !this.showSearchBar;
  }

  closeSearchBar() {
    this.showSearchBar = false;
  }

  // Mobile menu state
  isMobileMenuOpen = false;
  openTopCategoryIndex: number | null = null;
  openSubCategoryIndex: number | null = null;
  openSubCategoryIndexes: number[] = [];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.openTopAccordionIndex = null;
      this.openNestedSubCategoryIndexes = {};
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.openTopAccordionIndex = null;
    this.openNestedSubCategoryIndexes = {};
  }

  toggleSubCategory(index: number) {
    const i = this.openSubCategoryIndexes.indexOf(index);
    if (i > -1) {
      this.openSubCategoryIndexes.splice(i, 1);
    } else {
      this.openSubCategoryIndexes.push(index);
    }
  }
  isSubCategoryOpen(index: number) {
    return this.openSubCategoryIndexes.includes(index);
  }

  // Top category
  toggleTopCategory(index: number) {
    this.openTopCategoryIndex =
      this.openTopCategoryIndex === index ? null : index;
    // reset sub-category when changing top category
    this.openSubCategoryIndex = null;
  }
  isTopCategoryOpen(index: number) {
    return this.openTopCategoryIndex === index;
  }

  getFlatItems(key: string) {
    return this.categories[key].flatMap((section) => section.items);
  }

  // Tracks open sub-accordions for mobile menu (only for "Rings")
  openNestedSubCategoryIndexes: { [key: string]: number | null } = {};

  constructor(private router: Router) {
    // Close mega menu on route change
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.hoveredMenu = null;
      });
  }

  navItems = [
    {
      label: 'All Jewelry',
      path: '/products',
    },
    {
      label: 'Gold',
      path: '/products',
    },
    {
      label: 'Rings',
      path: '/products',
    },
    {
      label: 'Earrings',
      path: '/products',
    },
    {
      label: 'Pendant',
      path: '/products',
    },
    {
      label: 'Necklace',
      path: '/products',
    },
    {
      label: 'Bracelet',
      path: '/products',
    },
    {
      label: 'Anklets',
      path: '/products',
    },
  ];

  hoveredMenu: string | null = null;
  activeCategoryIndex: number = 0;
  hoverTimeout: any = null;

  showMenu(label: string) {
    clearTimeout(this.hoverTimeout);
    this.hoveredMenu = label;
  }

  hideMenu() {
    // Delay hiding to prevent flicker
    this.hoverTimeout = setTimeout(() => {
      this.hoveredMenu = null;
    }, 100);
  }

  setActiveCategory(index: number) {
    this.activeCategoryIndex = index;
  }

  isMenuActive(label: string) {
    return this.hoveredMenu === label;
  }

  accordionStates: boolean[] = [];

  toggleAccordion(index: number) {
    this.accordionStates[index] = !this.accordionStates[index];
  }

  isAccordionOpen(index: number): boolean {
    return !!this.accordionStates[index];
  }

  categories: { [key: string]: MegaMenuCategory[] } = {
    'All Jewelry': [
      {
        title: 'Shop by Category',
        items: [
          {
            label: 'Rings',
            image: '/assets/images/home/ring-icon.png',
            path: '/products',
          },
          {
            label: 'Earrings',
            image: '/assets/images/home/earring-icon.png',
            path: '',
          },
          {
            label: 'Pendant',
            image: '/assets/images/home/pendant-icon.png',
            path: '',
          },
          {
            label: 'Necklace',
            image: '/assets/images/home/necklace-icon.png',
            path: '',
          },
          {
            label: 'Bracelet',
            image: '/assets/images/home/bracelet-icon.png',
            path: '',
          },
          {
            label: 'Anklet',
            image: '/assets/images/home/anklet-icon.png',
            path: '',
          },
        ],
      },
      {
        title: 'Shop by Price',
        items: [
          { label: 'Under ₹ 1500', path: '' },
          { label: '₹ 1500 - ₹ 5000', path: '' },
          { label: '₹ 5000 - ₹ 10000', path: '' },
          { label: 'Above ₹ 10000', path: '' },
        ],
      },
      {
        title: 'Shop by Metal',
        items: [
          { label: '925 Silver', path: '' },
          { label: 'Gold Plated', path: '' },
          { label: 'Rosegold Plated', path: '' },
        ],
      },
      {
        title: 'Shop by Style',
        items: [
          { label: 'Daily Wear', path: '' },
          { label: 'Office Wear', path: '' },
          { label: 'Casual', path: '' },
          { label: 'Festive', path: '' },
        ],
      },
      {
        title: 'Image',
        items: [
          { label: '', image: '/assets/images/home/bestseller1.png', path: '' },
        ],
      },
    ],
    Gold: [
      {
        title: 'Shop by Category',
        items: [
          {
            label: 'Rings',
            image: '/assets/images/home/ring-icon.png',
            path: '/products',
          },
          {
            label: 'Earrings',
            image: '/assets/images/home/earring-icon.png',
            path: '/products',
          },
          {
            label: 'Pendant',
            image: '/assets/images/home/pendant-icon.png',
            path: '/products',
          },
          {
            label: 'Necklace',
            image: '/assets/images/home/necklace-icon.png',
            path: '/products',
          },
          {
            label: 'Bracelet',
            image: '/assets/images/home/bracelet-icon.png',
            path: '/products',
          },
          {
            label: 'Anklet',
            image: '/assets/images/home/anklet-icon.png',
            path: '/products',
          },
        ],
      },
      {
        title: 'Shop by Price',
        items: [
          { label: 'Under ₹ 1500', path: '' },
          { label: '₹ 1500 - ₹ 5000', path: '' },
          { label: '₹ 5000 - ₹ 10000', path: '' },
          { label: 'Above ₹ 10000', path: '' },
        ],
      },
      {
        title: 'Shop by Metal',
        items: [
          { label: '925 Silver', path: '' },
          { label: 'Gold Plated', path: '' },
          { label: 'Rosegold Plated', path: '' },
        ],
      },
      {
        title: 'Shop by Style',
        items: [
          { label: 'Daily Wear', path: '' },
          { label: 'Office Wear', path: '' },
          { label: 'Casual', path: '' },
          { label: 'Festive', path: '' },
        ],
      },
      {
        title: 'Image',
        items: [
          { label: '', image: '/assets/images/home/bestseller1.png', path: '' },
        ],
      },
    ],

    Rings: [
      {
        title: 'Shop by Category',
        items: [
          {
            label: 'All Rings',
            image: '/assets/images/home/ring-icon.png',
            path: '/products',
          },
          {
            label: 'Adjustable Rings',
            image: '/assets/images/home/ring-icon.png',
            path: '/products',
          },
          {
            label: 'Solitaire Rings',
            image: '/assets/images/home/ring-icon.png',
            path: '/products',
          },
          {
            label: 'Band Rings',
            image: '/assets/images/home/ring-icon.png',
            path: '/products',
          },
          {
            label: 'Couple Rings',
            image: '/assets/images/home/ring-icon.png',
            path: '/products',
          },
        ],
      },
      {
        title: 'Shop by Price',
        items: [
          { label: 'Under ₹ 1500', path: '' },
          { label: '₹ 1500 - ₹ 5000', path: '' },
          { label: '₹ 5000 - ₹ 10000', path: '' },
          { label: 'Above ₹ 10000', path: '' },
        ],
      },
      {
        title: 'Shop by Metal',
        items: [
          { label: '925 Silver', path: '' },
          { label: 'Gold Plated', path: '' },
          { label: 'Rosegold Plated', path: '' },
        ],
      },
      {
        title: 'Shop by Style',
        items: [
          { label: 'Daily Wear', path: '' },
          { label: 'Office Wear', path: '' },
          { label: 'Casual', path: '' },
          { label: 'Festive', path: '' },
        ],
      },
      {
        title: 'Image',
        items: [
          { label: '', image: '/assets/images/home/bestseller1.png', path: '' },
        ],
      },
    ],

    Earrings: [
      {
        title: 'Shop by Category',
        items: [
          {
            label: 'Hoops',
            image: '/assets/images/home/earring-icon.png',
            path: '',
          },
          {
            label: 'Studs',
            image: '/assets/images/home/earring-icon.png',
            path: '',
          },
          {
            label: 'Chandbali',
            image: '/assets/images/home/earring-icon.png',
            path: '',
          },
          {
            label: 'Drop Earrings',
            image: '/assets/images/home/earring-icon.png',
            path: '',
          },
          {
            label: 'Ear Cuffs',
            image: '/assets/images/home/earring-icon.png',
            path: '',
          },
        ],
      },
      {
        title: 'Shop by Price',
        items: [
          { label: 'Under ₹ 1500', path: '' },
          { label: '₹ 1500 - ₹ 5000', path: '' },
          { label: '₹ 5000 - ₹ 10000', path: '' },
          { label: 'Above ₹ 10000', path: '' },
        ],
      },
      {
        title: 'Shop by Metal',
        items: [
          { label: '925 Silver', path: '' },
          { label: 'Gold Plated', path: '' },
          { label: 'Rosegold Plated', path: '' },
        ],
      },
      {
        title: 'Shop by Style',
        items: [
          { label: 'Daily Wear', path: '' },
          { label: 'Office Wear', path: '' },
          { label: 'Casual', path: '' },
          { label: 'Festive', path: '' },
        ],
      },
      {
        title: 'Image',
        items: [
          { label: '', image: '/assets/images/home/bestseller3.png', path: '' },
        ],
      },
    ],

    Pendant: [
      {
        title: 'Shop by Category',
        items: [
          {
            label: 'Heart Pendants',
            image: '/assets/images/home/pendant-icon.png',
            path: '',
          },
          {
            label: 'Religious Pendants',
            image: '/assets/images/home/pendant-icon.png',
            path: '',
          },
          {
            label: 'Alphabet Pendants',
            image: '/assets/images/home/pendant-icon.png',
            path: '',
          },
          {
            label: 'Gemstone Pendants',
            image: '/assets/images/home/pendant-icon.png',
            path: '',
          },
           {
            label: 'Solitaire Pendants',
            image: '/assets/images/home/pendant-icon.png',
            path: '',
          },
        ],
      },
      {
        title: 'Shop by Price',
        items: [
          { label: 'Under ₹ 1500', path: '' },
          { label: '₹ 1500 - ₹ 5000', path: '' },
          { label: '₹ 5000 - ₹ 10000', path: '' },
          { label: 'Above ₹ 10000', path: '' },
        ],
      },
      {
        title: 'Shop by Metal',
        items: [
          { label: '925 Silver', path: '' },
          { label: 'Gold Plated', path: '' },
          { label: 'Rosegold Plated', path: '' },
        ],
      },
      {
        title: 'Shop by Style',
        items: [
          { label: 'Daily Wear', path: '' },
          { label: 'Office Wear', path: '' },
          { label: 'Casual', path: '' },
          { label: 'Festive', path: '' },
        ],
      },
      {
        title: 'Image',
        items: [
          { label: '', image: '/assets/images/home/bestseller1.png', path: '' },
        ],
      },
    ],

    Necklace: [
      {
        title: 'Shop by Category',
        items: [
          {
            label: 'Choker Sets',
            image: '/assets/images/home/necklace-icon.png',
            path: '',
          },
          {
            label: 'Layered Necklaces',
            image: '/assets/images/home/necklace-icon.png',
            path: '',
          },
          {
            label: 'Temple Necklaces',
            image: '/assets/images/home/necklace-icon.png',
            path: '',
          },
          {
            label: 'Bridal Sets',
            image: '/assets/images/home/necklace-icon.png',
            path: '',
          },
          {
            label: 'Simple Chains',
            image: '/assets/images/home/necklace-icon.png',
            path: '',
          },
        ],
      },
      {
        title: 'Shop by Price',
        items: [
          { label: 'Under ₹ 1500', path: '' },
          { label: '₹ 1500 - ₹ 5000', path: '' },
          { label: '₹ 5000 - ₹ 10000', path: '' },
          { label: 'Above ₹ 10000', path: '' },
        ],
      },
      {
        title: 'Shop by Metal',
        items: [
          { label: '925 Silver', path: '' },
          { label: 'Gold Plated', path: '' },
          { label: 'Rosegold Plated', path: '' },
        ],
      },
      {
        title: 'Shop by Style',
        items: [
          { label: 'Daily Wear', path: '' },
          { label: 'Office Wear', path: '' },
          { label: 'Casual', path: '' },
          { label: 'Festive', path: '' },
        ],
      },
      {
        title: 'Image',
        items: [
          { label: '', image: '/assets/images/home/bestseller1.png', path: '' },
        ],
      },
    ],

    Bracelet: [
      {
        title: 'Shop by Category',
        items: [
          {
            label: 'Charm Bracelets',
            image: '/assets/images/home/bracelet-icon.png',
            path: '',
          },
          {
            label: 'Bangles',
            image: '/assets/images/home/bracelet-icon.png',
            path: '',
          },
          {
            label: 'Cuff Bracelets',
            image: '/assets/images/home/bracelet-icon.png',
            path: '',
          },
          {
            label: 'Chain Bracelets',
            image: '/assets/images/home/bracelet-icon.png',
            path: '',
          },
        ],
      },
      {
        title: 'Shop by Price',
        items: [
          { label: 'Under ₹ 1500', path: '' },
          { label: '₹ 1500 - ₹ 5000', path: '' },
          { label: '₹ 5000 - ₹ 10000', path: '' },
          { label: 'Above ₹ 10000', path: '' },
        ],
      },
      {
        title: 'Shop by Metal',
        items: [
          { label: '925 Silver', path: '' },
          { label: 'Gold Plated', path: '' },
          { label: 'Rosegold Plated', path: '' },
        ],
      },
      {
        title: 'Shop by Style',
        items: [
          { label: 'Daily Wear', path: '' },
          { label: 'Office Wear', path: '' },
          { label: 'Casual', path: '' },
          { label: 'Festive', path: '' },
        ],
      },
      {
        title: 'Image',
        items: [
          { label: '', image: '/assets/images/home/bestseller4.png', path: '' },
        ],
      },
    ],

    Anklets: [
      {
        title: 'Shop by Category',
        items: [
          {
            label: 'Silver Anklets',
            image: '/assets/images/home/anklet-icon.png',
            path: '',
          },
          {
            label: 'Beaded Anklets',
            image: '/assets/images/home/anklet-icon.png',
            path: '',
          },
          {
            label: 'Bridal Anklets',
            image: '/assets/images/home/anklet-icon.png',
            path: '',
          },
          {
            label: 'Everyday Wear',
            image: '/assets/images/home/anklet-icon.png',
            path: '',
          },
          {
            label: 'Simple Anklets',
            image: '/assets/images/home/anklet-icon.png',
            path: '',
          },
        ],
      },
      {
        title: 'Shop by Price',
        items: [
          { label: 'Under ₹ 1500', path: '' },
          { label: '₹ 1500 - ₹ 5000', path: '' },
          { label: '₹ 5000 - ₹ 10000', path: '' },
          { label: 'Above ₹ 10000', path: '' },
        ],
      },
      {
        title: 'Shop by Metal',
        items: [
          { label: '925 Silver', path: '' },
          { label: 'Gold Plated', path: '' },
          { label: 'Rosegold Plated', path: '' },
        ],
      },
      {
        title: 'Shop by Style',
        items: [
          { label: 'Daily Wear', path: '' },
          { label: 'Office Wear', path: '' },
          { label: 'Casual', path: '' },
          { label: 'Festive', path: '' },
        ],
      },
      {
        title: 'Image',
        items: [
          { label: '', image: '/assets/images/home/anklets.png', path: '' },
        ],
      },
    ],
  };

  get categoryKeys() {
    return Object.keys(this.categories);
  }

  toggleTopAccordion(index: number) {
    this.openTopAccordionIndex =
      this.openTopAccordionIndex === index ? null : index;
  }

  isTopAccordionOpen(index: number) {
    return this.openTopAccordionIndex === index;
  }

  toggleNestedSubCategory(topKey: string, index: number) {
    if (!this.openNestedSubCategoryIndexes[topKey]) {
      this.openNestedSubCategoryIndexes[topKey] = null;
    }
    this.openNestedSubCategoryIndexes[topKey] =
      this.openNestedSubCategoryIndexes[topKey] === index ? null : index;
  }

  isNestedSubCategoryOpen(topKey: string, index: number) {
    return this.openNestedSubCategoryIndexes[topKey] === index;
  }

  closeMenuOnLinkClick() {
    this.openTopAccordionIndex = null;
    this.openNestedSubCategoryIndexes = {};
  }
   activeMenu: string | null = null;

  closeMegaAndNavigate(link: string) {
    this.activeMenu = null;
    this.router.navigate([link]);
  }
}
