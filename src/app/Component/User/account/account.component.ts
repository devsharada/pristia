import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-account',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  showMenu = false;

  // Close menu when clicking outside
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.menu-wrapper') && !target.closest('.menu-button')) {
      this.showMenu = false;
    }
  }

  // Close after selecting link
  closeMenu() {
    this.showMenu = false;
  }

}
