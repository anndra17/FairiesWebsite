import { Component, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { SITE_CONTENT } from '../../../../content/site-content';

@Component({ selector: 'app-home-page', templateUrl: './home-page.component.html' })
export class HomePageComponent {
  protected readonly content = SITE_CONTENT;

  private readonly meta = inject(Meta);

  constructor() {
    this.meta.updateTag({ name: 'description', content: SITE_CONTENT.pageDescription });
  }
}
