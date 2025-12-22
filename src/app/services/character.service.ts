
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character'; 

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  httpClient = inject(HttpClient);

  private baseUrl: String = "https://dragonball-api.com/api/";
  constructor() {}
      getCharacters(page:number =1, limit: number = 10): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}characters?page=${page}&limit=${limit}`)
  }

  getCharacterId(id: string): Observable<Character> {
    return this.httpClient.get<Character>(`${this.baseUrl}characters/${id}`);
  }

  filterCharacter(filter: {race?: string, affiliation?: string, name?: string, gender?: string}): Observable<Character[]> {
    return this.httpClient.get<Character[]>(`${this.baseUrl}characters/`, {params: filter});
  }

   
}






