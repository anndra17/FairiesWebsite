import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SITE_CONTENT } from './content/site-content';
import { SiteFooterComponent } from './shared/components/site-footer/site-footer.component';
import { SiteHeaderComponent } from './shared/components/site-header/site-header.component';

@Component({ selector: 'app-root', imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent], templateUrl: './app.html' })
export class App {
  protected readonly content = SITE_CONTENT;
}
