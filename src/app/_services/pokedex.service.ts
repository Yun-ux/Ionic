import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result, PokedexData } from '../_models/pokedex';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  endPoint: string ='https://pokeapi.co/api/v2/pokemon';

  constructor(
    private HttpClient: HttpClient
  ) {

   }
   getPokemons() {
    // va get l'api via l'url
    return this.HttpClient
    .get<PokedexData>(this.endPoint)
    .toPromise();
  }
  getPokemonsByUrl(url) {
    return this.HttpClient
    .get<PokedexData>(url)
    .toPromise();
  }
}
