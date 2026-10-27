import { Component } from '@angular/core';

interface GalleryPhoto {
  src: string;
  alt: string;
}

interface GalleryCategory {
  id: string;
  label: string;
  title: string;
  description: string;
  photos: GalleryPhoto[];
}

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.css',
})
export class GalleryPageComponent {
  protected readonly categories: GalleryCategory[] = [
    {
      id: 'ursitoare',
      label: 'Momentul Ursitoarelor',
      title: 'Momentul Ursitoarelor',
      description: 'Urări pentru micuț și familie, momente jucăușe și amintiri alături de zâne.',
      photos: [
        { src: '/assets/gallery/Ursitoare/Malefica.jpeg', alt: 'Ursitoarea Malefica la eveniment' },
        { src: '/assets/gallery/Ursitoare/Malefica2.jpeg', alt: 'Moment artistic cu ursitoarea Malefica' },
        { src: '/assets/gallery/Ursitoare/MaleficaSiBroscuta.jpeg', alt: 'Ursitoarea Malefica și broscuța' },
        { src: '/assets/gallery/Ursitoare/MaleficaSiPruncii.jpeg', alt: 'Ursitoarea alături de copii' },
        { src: '/assets/gallery/Ursitoare/MaleficaSiZanaBuna.jpeg', alt: 'Malefica și zâna bună' },
        { src: '/assets/gallery/Ursitoare/ParintiIntreAripi.jpeg', alt: 'Părinții înconjurați de aripi de zână' },
        { src: '/assets/gallery/Ursitoare/ParintiIntreUrsitoare.jpeg', alt: 'Părinții alături de ursitoare' },
        { src: '/assets/gallery/Ursitoare/PozaFinalFamilie.jpeg', alt: 'Fotografie de familie la finalul spectacolului' },
        { src: '/assets/gallery/Ursitoare/PozaUrsittoareVeche.jpeg', alt: 'Ursitoare la un eveniment de familie' },
        { src: '/assets/gallery/Ursitoare/UrsitoareFamilieExterior.jpeg', alt: 'Ursitoare și familie în aer liber' },
        { src: '/assets/gallery/Ursitoare/UrsitoareUrari.jpeg', alt: 'Ursitoarele rostesc urări pentru copil' },
        { src: '/assets/gallery/Ursitoare/ZaneBuneExterior.jpeg', alt: 'Zâne bune la un eveniment în aer liber' },
      ],
    },
    {
      id: 'face-painting',
      label: 'Face painting',
      title: 'Pictură pe față',
      description: 'Cei mici își aleg personajul preferat, iar imaginația prinde culoare.',
      photos: [
        { src: '/assets/gallery/FacePainting/Ananas.jpeg', alt: 'Pictură pe față cu ananas' },
        { src: '/assets/gallery/FacePainting/Batman.jpeg', alt: 'Pictură pe față cu Batman' },
        { src: '/assets/gallery/FacePainting/bee.jpeg', alt: 'Pictură pe față cu o albină' },
        { src: '/assets/gallery/FacePainting/Capybara.jpeg', alt: 'Pictură pe față cu o capibara' },
        { src: '/assets/gallery/FacePainting/Cirese.jpeg', alt: 'Pictură pe față cu cireșe' },
        { src: '/assets/gallery/FacePainting/Spiderman.jpeg', alt: 'Pictură pe față cu Spider-Man' },
        { src: '/assets/gallery/FacePainting/stitch.jpeg', alt: 'Pictură pe față cu Stitch' },
        { src: '/assets/gallery/FacePainting/tulips.jpeg', alt: 'Pictură pe față cu lalele' },
        { src: '/assets/gallery/FacePainting/tulips2.jpg', alt: 'Un alt model de pictură cu lalele' },
      ],
    },
    {
      id: 'ateliere-creative',
      label: 'Ateliere creative',
      title: 'Ateliere creative',
      description: 'Mânuțe ocupate, imaginație în voie și creații pe care copiii le iau acasă.',
      photos: [
        { src: '/assets/gallery/Atelier/AripiFinalizate.jpeg', alt: 'Aripi de zână create la atelier' },
        { src: '/assets/gallery/Atelier/AtelierAripi.jpeg', alt: 'Copiii creează aripi de zână' },
        { src: '/assets/gallery/Atelier/ReciclARTAdulti.jpeg', alt: 'Activitate creativă ReciclART' },
        { src: '/assets/gallery/Atelier/SetupReciclART.jpeg', alt: 'Materiale pregătite pentru atelierul ReciclART' },
      ],
    },
  ];

  protected activeCategoryIndex = 0;
  protected visiblePhotos = [...this.categories[0].photos];

  protected get activeCategory(): GalleryCategory {
    return this.categories[this.activeCategoryIndex];
  }

  protected selectCategory(index: number): void {
    this.activeCategoryIndex = index;
    this.visiblePhotos = [...this.activeCategory.photos];
  }

  protected showNext(): void {
    const [firstPhoto, ...remainingPhotos] = this.visiblePhotos;
    this.visiblePhotos = [...remainingPhotos, firstPhoto];
  }

  protected showPrevious(): void {
    const lastPhoto = this.visiblePhotos[this.visiblePhotos.length - 1];
    this.visiblePhotos = [lastPhoto, ...this.visiblePhotos.slice(0, -1)];
  }
}
