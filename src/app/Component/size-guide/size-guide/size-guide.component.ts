import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NewsletterComponent } from "../../Home/newsletter/newsletter.component";

@Component({
  selector: 'app-size-guide',
  imports: [RouterLinkActive, RouterOutlet, RouterLink, NewsletterComponent],
  templateUrl: './size-guide.component.html',
  styleUrl: './size-guide.component.css'
})
export class SizeGuideComponent {

}
