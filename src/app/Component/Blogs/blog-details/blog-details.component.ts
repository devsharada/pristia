import { Component } from '@angular/core';
import { RelatedArticlesComponent } from "../related-articles/related-articles.component";
import { NewsletterComponent } from "../../Home/newsletter/newsletter.component";

@Component({
  selector: 'app-blog-details',
  imports: [RelatedArticlesComponent, NewsletterComponent],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent {

}
