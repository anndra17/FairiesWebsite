import { TestBed } from '@angular/core/testing';
import { PackagesPageComponent } from './packages-page.component';

describe('PackagesPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackagesPageComponent],
    }).compileComponents();
  });

  it('routes every package CTA to the preparation section on the packages page', () => {
    const fixture = TestBed.createComponent(PackagesPageComponent);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const links = Array.from(element.querySelectorAll('article a'));

    expect(links).toHaveLength(3);
    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      '/pachete-2026#preparation',
      '/pachete-2026#preparation',
      '/pachete-2026#preparation',
    ]);
    expect(element.querySelector('#preparation')).not.toBeNull();
  });
});
