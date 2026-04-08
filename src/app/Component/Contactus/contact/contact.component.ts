import { Component } from '@angular/core';
import { NewsletterComponent } from "../../Home/newsletter/newsletter.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NewsletterComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  name = '';
  email = '';
  phone = '';
  message = '';

  submitForm() {
    console.log({
      name: this.name,
      email: this.email,
      phone: this.phone,
      message: this.message
    });
    alert('Form submitted!');
  }


}
