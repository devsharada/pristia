import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { CategoryComponent } from '../category/category.component';
import { ProductSlider1Component } from '../product-slider1/product-slider1.component';
import { CollectionComponent } from '../collection/collection.component';
import { ShopByStyleComponent } from '../shop-by-style/shop-by-style.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { BlogsComponent } from "../blogs/blogs.component";
import { BestsellerComponent } from "../bestseller/bestseller.component";
import { NewsletterComponent } from "../newsletter/newsletter.component";

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, CategoryComponent, ProductSlider1Component, CollectionComponent, ShopByStyleComponent, TestimonialComponent, BlogsComponent, BestsellerComponent, NewsletterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
