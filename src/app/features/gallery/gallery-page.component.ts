import { Component } from '@angular/core';

interface GalleryPhoto {
  src: string;
  alt: string;
  story: string;
}

const PHOTO_TITLES: Record<string, string> = {
  'PozaUrsittoareVeche.jpeg': 'Întâlnire',
  'UrsitoareUrari.jpeg': 'Urări',
  'ParintiIntreUrsitoare.jpeg': 'Împreună',
  'ZaneBuneExterior.jpeg': 'Bucurie',
  'ParintiIntreAripi.jpeg': 'Emoție',
  'Malefica.jpeg': 'Mister',
  'MaleficaSiZanaBuna.jpeg': 'Surpriză',
  'MaleficaSiPruncii.jpeg': 'Râsete',
  'PozaFinalFamilie.jpeg': 'Amintire',
  'UrsitoareFamilieExterior.jpeg': 'Autentic',
  'Ananas.jpeg': 'Culoare',
  'Batman.jpeg': 'Curaj',
  'bee.jpeg': 'Bucurie',
  'Capybara.jpeg': 'Blândețe',
  'Cirese.jpeg': 'Prospețime',
  'Spiderman.jpeg': 'Energie',
  'stitch.jpeg': 'Pozne',
  'tulips2.jpg': 'Delicatețe',
  'AripiFinalizate.jpeg': 'Mândrie',
  'AtelierAripi.jpeg': 'Creativitate',
  'ReciclARTAdulti.jpeg': 'Inspirație',
  'SetupReciclART.jpeg': 'Pregătiri',
  'reciclartCopilarie1.jpg': 'Poveste',
  'reciclartCopilarie2.jpeg': 'Imaginație',
};

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
        { src: '/assets/gallery/Ursitoare/PozaUrsittoareVeche.jpeg', alt: 'Ursitoare la un eveniment de familie', story: 'Printre urări și zâmbete, rămâne o clipă de poveste surprinsă în fotografie.' },
        { src: '/assets/gallery/Ursitoare/UrsitoareUrari.jpeg', alt: 'Ursitoarele rostesc urări pentru copil', story: 'Cu glas blând, ursitoarele așază urări de bine la începutul unei noi povești.' },
        { src: '/assets/gallery/Ursitoare/ParintiIntreUrsitoare.jpeg', alt: 'Părinții alături de ursitoare', story: 'Părinții sunt primiți în poveste, alături de ursitoarele care le aduc urări pentru micuț.' },
        { src: '/assets/gallery/Ursitoare/ZaneBuneExterior.jpeg', alt: 'Zâne bune la un eveniment în aer liber', story: 'Zânele bune întâmpină familia în aer liber și deschid împreună o poveste nouă.' },
        { src: '/assets/gallery/Ursitoare/ParintiIntreAripi.jpeg', alt: 'Părinții înconjurați de aripi de zână', story: 'Sub aripile zânelor, părinții primesc o urare plină de emoție și speranță.' },
        { src: '/assets/gallery/Ursitoare/Malefica.jpeg', alt: 'Ursitoarea Malefica la eveniment', story: 'Malefica intră în scenă cu un strop de mister și mult farmec.' },
        { src: '/assets/gallery/Ursitoare/MaleficaSiZanaBuna.jpeg', alt: 'Malefica și zâna bună', story: 'Când zâna bună și Malefica se întâlnesc, povestea capătă o întorsătură neașteptată.' },
        { src: '/assets/gallery/Ursitoare/MaleficaSiPruncii.jpeg', alt: 'Ursitoarea alături de copii', story: 'Un alt zâmbet, încă o urare și o clipă de poveste împărtășită cu cei mici.' },
        { src: '/assets/gallery/Ursitoare/PozaFinalFamilie.jpeg', alt: 'Fotografie de familie la finalul spectacolului', story: 'Povestea se încheie cu toți cei dragi împreună, într-o fotografie de păstrat.' },
        { src: '/assets/gallery/Ursitoare/UrsitoareFamilieExterior.jpeg', alt: 'Ursitoare și familie în aer liber', story: 'În aer liber, familia și zânele împart zâmbete sub cerul evenimentului.' },
      ],
    },
    {
      id: 'face-painting',
      label: 'Face painting',
      title: 'Pictură pe față',
      description: 'Cei mici își aleg personajul preferat, iar imaginația prinde culoare.',
      photos: [
        { src: '/assets/gallery/FacePainting/Ananas.jpeg', alt: 'Pictură pe față cu ananas', story: 'Un ananas vesel aduce o pată de culoare și un zâmbet jucăuș.' },
        { src: '/assets/gallery/FacePainting/Batman.jpeg', alt: 'Pictură pe față cu Batman', story: 'Cu masca lui Batman, micul erou e gata să salveze pruncul de vicleșugurile Maleficăi.' },
        { src: '/assets/gallery/FacePainting/bee.jpeg', alt: 'Pictură pe față cu o albină', story: 'O albinuță zumzăie prin sală și răspândește în jurul ei multă voie bună și zâmbete.' },
        { src: '/assets/gallery/FacePainting/Capybara.jpeg', alt: 'Pictură pe față cu o capibara', story: 'Capibara cea drăgălașă transformă pictura pe față într-o amintire haioasă cu animalul favorit.' },
        { src: '/assets/gallery/FacePainting/Cirese.jpeg', alt: 'Pictură pe față cu cireșe', story: 'Două cireșe roșii aduc o pată de culoare pe chip, reamintind de căldura zilelor de vară.' },
        { src: '/assets/gallery/FacePainting/Spiderman.jpeg', alt: 'Pictură pe față cu Spider-Man', story: 'Spider-Man e pregătit să salveze seara cu multe zâmbete și pași de dans.' },
        { src: '/assets/gallery/FacePainting/stitch.jpeg', alt: 'Pictură pe față cu Stitch', story: 'Stitch se alătură petrecerii și promite o aventură plină de ghidușii.' },
        { src: '/assets/gallery/FacePainting/tulips2.jpg', alt: 'Un model de pictură cu lalele', story: 'Pentru fetițele care iubesc florile, lalelele aduc o notă de delicatețe și farmec.' },
      ],
    },
    {
      id: 'ateliere-creative',
      label: 'Ateliere creative',
      title: 'Ateliere creative',
      description: 'Mânuțe ocupate, imaginație în voie și creații pe care copiii le iau acasă.',
      photos: [
        { src: '/assets/gallery/Atelier/AripiFinalizate.jpeg', alt: 'Aripi de zână create la atelier', story: 'Iar la final, când aripile sunt gata, fiecare copil pleacă acasă cu o creație făcută chiar de el.' },
        { src: '/assets/gallery/Atelier/SetupReciclART.jpeg', alt: 'Materiale pregătite pentru atelierul ReciclART', story: 'Materialele sunt aranjate, iar masa de lucru așteaptă să înceapă o nouă aventura creativă.' },
        { src: '/assets/gallery/Atelier/reciclartCopilarie1.jpg', alt: 'Tablou ReciclART cu un castel de poveste și un copil', story: 'Culorile, sclipiciul și imaginația copiilor transformă pânza într-o scenă de poveste.' },
        { src: '/assets/gallery/Atelier/reciclartCopilarie2.jpeg', alt: 'Tablou ReciclART cu o casă, un copil și personaje desenate', story: 'La atelier, atât copiii cât și adulții renunță la granițe și dau frâu liber imaginației.' },
        { src: '/assets/gallery/Atelier/ReciclARTAdulti.jpeg', alt: 'Activitate creativă ReciclART', story: 'Împreună redăm povestea fiecăruia, dar înainte de asta facem o scurtă introspecție.' },
        { src: '/assets/gallery/Atelier/AtelierAripi.jpeg', alt: 'Copiii creează aripi de zână', story: 'Pentru noi, nu există bine sau rău, exista doar ceea ce ne face fericiți ca formă de frumos.' },
      ],
    },
  ];

  protected activeCategoryIndex = 0;
  protected visiblePhotos = [...this.categories[0].photos];

  protected get activeCategory(): GalleryCategory {
    return this.categories[this.activeCategoryIndex];
  }

  protected get activePhoto(): GalleryPhoto {
    return this.visiblePhotos[1] ?? this.visiblePhotos[0];
  }

  protected get activePhotoTitle(): string {
    const filename = this.activePhoto.src.split('/').pop() ?? '';
    return PHOTO_TITLES[filename] ?? this.activeCategory.title;
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
