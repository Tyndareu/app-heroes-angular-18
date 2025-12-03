import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss',
})
export class HeroDetailComponent implements OnInit {
  private readonly _heroService = inject(HeroesService);

  private readonly _router = inject(Router);

  public $id = input.required<string>();

  public $hero = signal<Hero | null>(null);

  ngOnInit(): void {
    this._loadHeroDetail();
  }

  public goBack(): void {
    this._router.navigate(['/heroes/list']);
  }

  private _loadHeroDetail(): void {
    const heroId = this.$id();

    this._heroService.getHeroById(heroId).subscribe({
      next: (hero: Hero) => {
        this.$hero.set(hero);
      }
    });
  }
}