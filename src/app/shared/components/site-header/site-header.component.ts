import { Component, signal } from '@angular/core';

@Component({ selector: 'app-site-header', templateUrl: './site-header.component.html' })
export class SiteHeaderComponent {
  protected readonly menuOpen = signal(false);
  protected closeMenu(): void { this.menuOpen.set(false); }
}
