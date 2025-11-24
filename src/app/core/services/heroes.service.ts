import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CORE_CONFIG } from '../config/core.config';
import { Hero } from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private readonly baseUrl = `${CORE_CONFIG.apiUrl}`;
  private readonly resource = 'heroes';

  constructor(private http: HttpClient) { }

  // GET /heroes
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/${this.resource}`);
  }

}
