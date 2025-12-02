/**
 * Servicio para gestionar operaciones relacionadas con héroes.
 * Proporciona métodos para obtener la lista completa de héroes desde la API.
 */
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Hero } from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  /**
   * Inyecta HttpClient para realizar peticiones HTTP a la API.
   */
  private readonly _http = inject(HttpClient);

  /**
   * URL base de la API de héroes.
   */
  private readonly _apiUrl: string = environment.apiUrl;
  /**
   * Obtiene la lista completa de héroes desde la API.
   * Si ocurre un error, retorna un array vacío y registra el error en consola.
   * @returns Observable con el array de héroes
   */
  public getHeroes(): Observable<Hero[]> {
    return this._http.get<Hero[]>(`${this._apiUrl}/heroes`).pipe(
      catchError(error => {
        console.error('Error al obtener los héroes:', error);
        return of([]);
      })
    );
  }
}
