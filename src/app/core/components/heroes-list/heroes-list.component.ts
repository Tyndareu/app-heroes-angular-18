import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.scss'
})
export class HeroesListComponent implements OnInit {

  /**
   * List of heroes to be displayed.
   *
   * @type {Hero[]}
   * @memberof HeroesListComponent
   */
  public heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    // Load heroes from service
    this.heroesService.getHeroes().subscribe({
      next: (data) => (this.heroes = data),
      error: (err) => console.error('Error loading heroes: ', err),
    });
  }

}
