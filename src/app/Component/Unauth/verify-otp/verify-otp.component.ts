import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-verify-otp',
  imports: [],
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.css'
})
export class VerifyOtpComponent {
  @Output() registerClick = new EventEmitter<void>();

   onRegisterClick() {
    this.registerClick.emit();
  }

}
