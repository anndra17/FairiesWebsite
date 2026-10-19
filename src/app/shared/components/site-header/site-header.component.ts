import { Component, signal } from '@angular/core';
import { SITE_CONTENT } from '../../../content/site-content';

@Component({ selector: 'app-site-header', templateUrl: './site-header.component.html' })
export class SiteHeaderComponent {
  protected readonly content = SITE_CONTENT;
  protected readonly menuOpen = signal(false);
  protected closeMenu(): void { this.menuOpen.set(false); }
}
