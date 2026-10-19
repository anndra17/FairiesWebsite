import { Component } from '@angular/core';
import { SITE_CONTENT } from '../../../content/site-content';

@Component({ selector: 'app-site-footer', templateUrl: './site-footer.component.html' })
export class SiteFooterComponent {
  protected readonly content = SITE_CONTENT;
}
