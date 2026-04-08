import { Component } from '@angular/core';
import { NewsletterComponent } from "../../Home/newsletter/newsletter.component";
import { OurValueComponent } from '../our-value/our-value.component';
import { ReviewComponent } from "../review/review.component";
import { WhyUsComponent } from "../why-us/why-us.component";

@Component({
  selector: 'app-about-us',
  imports: [NewsletterComponent, OurValueComponent, ReviewComponent, WhyUsComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
