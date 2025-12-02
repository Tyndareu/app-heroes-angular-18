/**
 * Componente que muestra la lista de héroes.
 * Utiliza el servicio de héroes para obtener los datos y los gestiona con signals.
 * Renderiza la lista usando la nueva sintaxis de control de flujo de Angular.
 */
import { Component, inject, OnInit, signal } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.scss',
})
export class HeroListComponent implements OnInit {
  /**
   * Inyecta el servicio de héroes para obtener los datos desde la API.
   */
  private readonly _heroesService = inject(HeroesService);

  /**
   * Signal que almacena la lista de héroes obtenida del servicio.
   */
  public allHeroes = signal<Hero[] | null>(null);

  /**
   * Hook de ciclo de vida que se ejecuta al inicializar el componente.
   * Llama al método para obtener todos los héroes.
   */
  ngOnInit(): void {
    this.getAllHeroes();
  }

  /**
   * Obtiene todos los héroes desde el servicio y actualiza la señal.
   * En caso de error, la señal se establece en null.
   */
  public getAllHeroes(): void {
    this._heroesService.getHeroes().subscribe({
      next: (heroes: Hero[]) => {
        this.allHeroes.set(heroes);
      },
      error: error => {
        console.error('Error al cargar los héroes:', error);
        this.allHeroes.set(null);
      },
    });
  }
}
