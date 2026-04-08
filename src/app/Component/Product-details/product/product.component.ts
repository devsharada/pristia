import { Component } from '@angular/core';
import { ProductInfoComponent } from "../product-info/product-info.component";
import { ProductSpecificationsComponent } from "../product-specifications/product-specifications.component";
import { NewsletterComponent } from "../../Home/newsletter/newsletter.component";
import { ProductSlider2Component } from "../product-slider2/product-slider2.component";

@Component({
  selector: 'app-product',
  imports: [ProductInfoComponent, ProductSpecificationsComponent, NewsletterComponent, ProductSlider2Component],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
