import { Component } from '@angular/core';
import { NewsletterComponent } from "../../Home/newsletter/newsletter.component";
import { AllProductsComponent } from "../all-products/all-products.component";

interface FilterOption {
  label: string;
  value: string;
  checked?: boolean;
}

interface FilterSection {
  title: string;
  type: 'checkbox' | 'range';
  options?: FilterOption[];
}

@Component({
  selector: 'app-hero-section',
  imports: [NewsletterComponent, AllProductsComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

    showFilters = false;


}
