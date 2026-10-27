import { Component } from '@angular/core';
import { SITE_CONTENT } from '../../content/site-content';

@Component({
  selector: 'app-packages-page',
  template: `
    <section id="packages" class="scroll-mt-24 bg-[radial-gradient(ellipse_at_10%_10%,#f5e8f2_0,transparent_34%),var(--color-paper)] py-16 sm:py-24">
      <div class="site-container">
        <div class="mx-auto mb-10 max-w-[720px] text-center"><span class="eyebrow">{{ content.packages.eyebrow }}</span><h1 class="section-title">{{ content.packages.title }}</h1><p class="mt-4 text-lg leading-relaxed text-muted">{{ content.packages.description }}</p></div>
        <div class="grid items-stretch gap-5 lg:grid-cols-3">
          @for (package of content.packages.cards; track package.tier) {
            <article class="relative flex flex-col rounded-3xl border border-line bg-white p-6 shadow-card sm:p-7" [class.lg:-translate-y-2]="package.featured" [class.border-2]="package.featured" [class.border-teal]="package.featured" [class.shadow-soft]="package.featured">
              @if (package.featured) { <span class="absolute right-5 top-5 rounded-full bg-mint px-3 py-1 text-[.68rem] font-extrabold uppercase tracking-wider text-teal-dark">{{ content.packages.featuredBadge }}</span> }
              <span class="text-xs font-extrabold uppercase tracking-[.14em] text-teal-dark">{{ package.tier }}</span><h2 class="mt-3 font-display text-3xl leading-tight text-plum-dark">{{ package.name }}</h2><p class="mt-3 min-h-20 text-sm leading-relaxed text-muted">{{ package.description }}</p>
              <p class="mt-3 border-b border-line pb-4 text-sm text-muted"><span class="font-semibold text-plum-dark">Durata:</span> {{ package.duration }}</p>
              <ul class="mb-6 mt-4 flex-1 space-y-3">@for (feature of package.features; track feature) { <li class="flex gap-3 text-sm leading-relaxed text-ink"><span class="text-teal" aria-hidden="true">✦</span><span>{{ feature }}</span></li> }</ul>
              <a class="rounded-full border border-plum/15 bg-plum/5 px-5 py-3 text-center text-sm font-bold text-plum transition hover:bg-plum hover:text-white" href="/#preparation">{{ package.cta }} <span aria-hidden="true">↗</span></a>
            </article>
          }
        </div>
        <p class="mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-muted"><strong class="text-plum-dark">{{ content.packages.noteLabel }}</strong> {{ content.packages.note }}</p>
      </div>
    </section>
  `,
})
export class PackagesPageComponent { protected readonly content = SITE_CONTENT; }
