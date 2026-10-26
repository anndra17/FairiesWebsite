import { Component } from '@angular/core';
import { SITE_CONTENT } from '../../content/site-content';

@Component({
  selector: 'app-story-page',
  template: `
    <section class="bg-[radial-gradient(ellipse_at_85%_15%,#f9e6e8_0,transparent_32%),linear-gradient(140deg,var(--color-paper),#fff_58%,#fff6f1)] py-16 sm:py-24">
      <div class="site-container">
        <header class="section-heading"><span class="eyebrow">Misiunea și povestea noastră</span><h1 class="section-title">O poveste începută din dorința de a aduce oamenii împreună</h1><p>Ursitoarele Fermecătoare creează momente calde și pline de voie bună pentru familiile din Brașov.</p></header>
        <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div class="grid min-h-[340px] place-items-center rounded-t-[48%] p-8"><img class="max-h-[340px] w-full object-contain" src="/assets/logo-emblem.png" alt="Emblema Ursitoarelor Fermecătoare" /></div>
          <div><span class="eyebrow">Misiunea noastră</span><h2 class="mt-3 font-display text-4xl text-plum-dark">Magie cu grijă pentru fiecare familie</h2><p class="mt-5 leading-relaxed text-muted">Misiunea noastră este să tranformăm unul dintre cele mai importante momente din viața unei familii într-o amintire memorabilă. Prin magia Ursitoarelor Fermecătoare, celebrăm venirea pe lume a fiecărui copil, aducem emoție, râsete cât cuprinde și implicăm întreaga familie într-o experiență autentică, plină de farmec și bucurie. Credem că darurile cele mai de preț nu sunt lucuri materiale, ci momentele trăite împreună și amintirile care dăinuie peste ani.</p></div>
        </div>
        <div class="mx-auto mt-16 max-w-3xl rounded-3xl bg-white p-7 shadow-card sm:p-10"><span class="eyebrow">Cum a început</span><h2 class="mt-3 font-display text-3xl text-plum-dark">Povestea afacerii noastre</h2><p class="mt-4 leading-relaxed text-muted">Totul a pornit din dorința de a fi zână ursitoare și de a aduce magie în momentele importante din viața familiilor. Așa a prins contur Ursitoarele Fermecătoare: un drum început pe cont propriu, cu emoția și teama firească a unui nou început, dar și cu încrederea că se poate construi o afacere în care oamenii să se simtă văzuți și apreciați.</p><p class="mt-4 leading-relaxed text-muted">Din fiecare experiență au venit lecții, iar povestea continuă să crească și să se adapteze. În centrul ei rămân oamenii: echipa care pune suflet în fiecare eveniment și familiile care ne primesc la botezul copilului lor. Fiecare întâlnire este o responsabilitate frumoasă și o ocazie de a dărui emoție, bucurie și amintiri care rămân.</p></div>
      </div>
    </section>
  `,
})
export class StoryPageComponent { protected readonly content = SITE_CONTENT; }
