import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONTENT } from '../../../content/site-content';

@Component({ selector: 'app-site-footer', imports: [RouterLink], templateUrl: './site-footer.component.html' })
export class SiteFooterComponent {
  protected readonly content = SITE_CONTENT;
  protected readonly socialLinks = SITE_CONTENT.footer.socialLinks.filter((link) => link.url);
  protected readonly phoneHref = SITE_CONTENT.footer.phoneNumber
    ? `tel:${SITE_CONTENT.footer.phoneNumber.replace(/\s+/g, '')}`
    : '';
}
