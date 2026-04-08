import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() registerClick = new EventEmitter<void>();
  @Output() verifyOtpClick = new EventEmitter<void>();

   onRegisterClick() {
    this.registerClick.emit();
  }

   onVerifyOtpClick() {
    this.verifyOtpClick.emit();
  }

}
