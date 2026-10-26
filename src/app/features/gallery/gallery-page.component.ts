import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.css',
  
})
export class GalleryPageComponent {
  @ViewChild('slide', { static: true })
  private slide!: ElementRef<HTMLDivElement>;

  constructor(private readonly renderer: Renderer2) {}

  showNext(): void {
    const firstItem = this.slide.nativeElement.firstElementChild;

    if (firstItem) {
      this.renderer.appendChild(this.slide.nativeElement, firstItem);
    }
  }

  showPrevious(): void {
    const slideElement = this.slide.nativeElement;
    const lastItem = slideElement.lastElementChild;

    if (lastItem) {
      this.renderer.insertBefore(slideElement, lastItem, slideElement.firstElementChild);
    }
  }

  protected readonly services = [
    { category: 'Poveste', title: 'Spectacolul Ursitoarelor', description: 'Urări pentru micuț și familie, momente jucăușe și fotografii alături de zâne.', image: '/assets/zane.png', alt: 'Ilustrație cu zâne' },
    { category: 'Culoare', title: 'Pictură pe față', description: 'Cei mici își aleg personajul preferat, iar imaginația prinde culoare.', image: '/assets/face-painting-icon.png', alt: 'Pensulă și culori pentru pictură pe față' },
    { category: 'Creație', title: 'Atelier creativ', description: 'Copiii creează accesorii de poveste și iau acasă ceva făcut chiar de ei.', image: '/assets/creative-workshop-icon.png', alt: 'Simbol pentru atelier creativ' },
  ];
}
