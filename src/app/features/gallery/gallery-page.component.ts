import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  template: `
    <section class="bg-[radial-gradient(ellipse_at_85%_15%,#f9e6e8_0,transparent_32%),linear-gradient(140deg,var(--color-paper),#fff_58%,#fff6f1)] py-16 sm:py-24">
      <div class="site-container">
        <div class="section-heading"><span class="eyebrow">Galerie</span><h1 class="section-title">Magia, în imagini</h1><p>Fiecare serviciu aduce un alt strop de poveste. Aici vei găsi imagini de la spectacole, pictură pe față și ateliere creative.</p></div>
        <div class="grid gap-6 md:grid-cols-3">
          @for (service of services; track service.title) {
            <article class="overflow-hidden rounded-3xl border border-line bg-white shadow-card">
              <div class="grid aspect-[4/3] place-items-center bg-lilac/50 p-8"><img class="max-h-full max-w-full object-contain" [src]="service.image" [alt]="service.alt" loading="lazy" /></div>
              <div class="p-6"><span class="eyebrow">{{ service.category }}</span><h2 class="mt-2 font-display text-2xl text-plum-dark">{{ service.title }}</h2><p class="mt-2 leading-relaxed text-muted">{{ service.description }}</p></div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class GalleryPageComponent {
  protected readonly services = [
    { category: 'Poveste', title: 'Spectacolul Ursitoarelor', description: 'Urări pentru micuț și familie, momente jucăușe și fotografii alături de zâne.', image: '/assets/zane.png', alt: 'Ilustrație cu zâne' },
    { category: 'Culoare', title: 'Pictură pe față', description: 'Cei mici își aleg personajul preferat, iar imaginația prinde culoare.', image: '/assets/face-painting-icon.png', alt: 'Pensulă și culori pentru pictură pe față' },
    { category: 'Creație', title: 'Atelier creativ', description: 'Copiii creează accesorii de poveste și iau acasă ceva făcut chiar de ei.', image: '/assets/creative-workshop-icon.png', alt: 'Simbol pentru atelier creativ' },
  ];
}
