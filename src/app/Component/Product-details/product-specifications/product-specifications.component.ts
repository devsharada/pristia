import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ProductReviewComponent } from "../../Review/product-review/product-review.component";

interface Specification {
  label: string;
  value: string;
}

@Component({
  selector: 'app-product-specifications',
  imports: [NgIf, NgClass, NgFor, ProductReviewComponent],
  templateUrl: './product-specifications.component.html',
  styleUrl: './product-specifications.component.css',
})
export class ProductSpecificationsComponent {
 private _activeTab = 1;

  get activeTab() {
    return this._activeTab;
  }

  set activeTab(tab: number) {
    this._activeTab = tab;
  }

  specifications: Specification[] = [
    { label: 'Brand', value: 'Pristia Jewellery' },
    { label: 'Product Type', value: 'Women’s Ring' },
    { label: 'Material', value: 'Brass base with 22K gold plating' },
    { label: 'Finish', value: 'Glossy + Matte fusion' },
    { label: 'Available Sizes', value: 'Adjustable / Standard (custom sizes on request)' },
    { label: 'Weight', value: '8–14 g (varies by size)' },
    { label: 'Design Type', value: 'Statement / Traditional / Everyday' },
    { label: 'Occasion', value: 'Wedding, Festive, Party, Everyday wear' },
    { label: 'Skin Friendly', value: 'Yes, hypoallergenic polish' },
    { label: 'Warranty', value: '6 months gold polish warranty' },
    { label: 'Country of Origin', value: 'India' },
  ];
}
