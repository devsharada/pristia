import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

   @Output() loginClick = new EventEmitter<void>();
   @Output() verifyOtpClick = new EventEmitter<void>();

   onLoginClick() {
    this.loginClick.emit();
  }

     onVerifyOtpClick() {
    this.verifyOtpClick.emit();
  }

}
