import { Component, OnInit, signal } from '@angular/core';
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
   */
  public heroes = signal<Hero[]>([]);


  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this._loadHeroes();
  }

  /** 
   * Loads heroes from the service 
   */
  private _loadHeroes(): void {
    this.heroesService.getHeroes().subscribe(data => this.heroes.set(data));
  }

}
