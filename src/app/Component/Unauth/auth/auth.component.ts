import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { VerifyOtpComponent } from '../verify-otp/verify-otp.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-auth',
  imports: [LoginComponent, RegisterComponent, VerifyOtpComponent, NgIf],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  @Input() isOpen = false;

  private _activeTab: 'login' | 'register' | 'verifyOtp' = 'login';

  @Input()
  set activeTab(value: 'login' | 'register' | 'verifyOtp') {
    this._activeTab = value ?? 'login';
  }
  get activeTab(): 'login' | 'register' | 'verifyOtp' {
    return this._activeTab;
  }

  @Output() close = new EventEmitter<void>();

    // Map activeTab to image URLs
  tabImages: Record<string, string> = {
    login: '/assets/images/unauth/login.png',
    register: '/assets/images/unauth/register.png',
    verifyOtp: '/assets/images/unauth/verify-otp.png'
  };


  onClose() {
    this.close.emit();
  }

  switchToRegister() {
    this.activeTab = 'register';
  }

  switchToLogin() {
    this.activeTab = 'login';
  }

  switchToVerifyOtp() {
    this.activeTab = 'verifyOtp';
  }
}
