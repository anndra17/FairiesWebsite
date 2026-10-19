import { Component } from '@angular/core';

interface Experience { readonly number: string; readonly icon: string; readonly category: string; readonly title: string; readonly description: string; readonly detail: string; }
interface CelebrationPackage { readonly tier: string; readonly name: string; readonly description: string; readonly price: string; readonly duration: string; readonly features: readonly string[]; readonly featured?: boolean; }

@Component({ selector: 'app-home-page', templateUrl: './home-page.component.html' })
export class HomePageComponent {
  protected readonly experiences: readonly Experience[] = [
    { number: '01', icon: '🧚', category: 'Poveste', title: 'Spectacolul Ursitoarelor', description: 'Trei zâne, urări pentru micuț, bunici și nași prinși în poveste, apoi probe jucăușe pentru invitați. Un final cu zâmbete, aplauze și fotografii.', detail: '15–20 minute · moment pentru toată familia' },
    { number: '02', icon: '🎨', category: 'Culoare', title: 'Pictură pe față', description: 'După întâlnirea cu zânele, copiii își aleg un personaj preferat. Culori profesionale, pensule și sclipici cosmetic transformă imaginația în culoare.', detail: 'Pentru copii · maximum 12 incluși în pachet' },
    { number: '03', icon: '✂️', category: 'Creație', title: 'Atelier creativ', description: 'Mânuțe ocupate, imaginație în voie: copiii creează aripi de zână sau săbii de cavaler și își iau acasă ceva făcut chiar de ei.', detail: 'Materiale reutilizate · aproximativ 50 minute' },
  ];
  protected readonly packages: readonly CelebrationPackage[] = [
    { tier: 'Pachetul 01', name: 'Primul Zâmbet', description: 'Momentul magic care deschide cea mai frumoasă poveste, cu daruri fermecate și râsete pe nerăsuflate.', price: '550', duration: '15–20 minute', features: ['Spectacolul Ursitoarelor Fermecătoare', 'Urări pentru micuț și familie', 'Fotografii la final cu ursitoarele'] },
    { tier: 'Pachetul 02', name: 'Poveste în Culori', description: 'Magia continuă, iar copiii devin pentru câteva clipe personajul sau eroul lor preferat.', price: '750', duration: '30–40 minute', featured: true, features: ['Spectacolul Ursitoarelor Fermecătoare', 'Pictură pe față pentru maximum 12 copii', 'Materiale profesionale și sclipici cosmetic'] },
    { tier: 'Pachetul 03', name: 'Tărâm Fermecat', description: 'Povestea nu se oprește când pleacă zânele. Copiii creează, se joacă și duc magia mai departe.', price: '1.320', duration: '75–80 minute', features: ['Spectacolul Ursitoarelor Fermecătoare', 'Pictură pe față pentru maximum 12 copii', 'Atelier creativ cu materiale pentru 12 copii'] },
  ];
  protected readonly values = [
    { icon: '♡', title: 'Aproape de oameni', text: 'Te ascultăm, ne adaptăm și avem grijă să se simtă bine și cei emoționați, și cei puși pe șotii.' },
    { icon: '✦', title: 'Creativitate', text: 'Inventăm povești, probe și activități care îi lasă pe copii să-și folosească imaginația.' },
    { icon: '❀', title: 'Respect', text: 'Fiecare familie, copil și moment are ritmul lui. Venim cu grijă și ne purtăm firesc, cu toată lumea.' },
    { icon: '☼', title: 'Divertisment', text: 'Ne place să râdem împreună. Malefica are voie să fie poznașă, iar invitații — să intre în joc.' },
  ] as const;
  protected readonly steps = [
    { title: 'Alege un loc vizibil și bine luminat', text: 'Cu spațiu pentru zâne și fără boxe prea aproape, ca microfonul să nu facă ecou.' },
    { title: 'Pregătește două scaune pentru părinți', text: 'Și spune-ne numele copilului, ca povestea să fie despre el.' },
    { title: 'Lasă bunicii și nașii aproape', text: 'Au roluri dragi în moment. Iar câțiva invitați cu chef de glume fac povestea și mai veselă.' },
    { title: 'Pentru activități, rezervă un colțișor', text: 'La pictură ne ajută o masă și câteva scaune; la atelier, spațiu și locuri pentru copii.' },
  ] as const;
}
