import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/_services/pokedex.service';
import { PokedexData } from 'src/app/_models/pokedex';
import { Result} from 'src/app/_models/pokedex';
import { ModalController } from '@ionic/angular';
import { PokemonDetailsPage } from './pokemon-details/pokemon-details.page';



@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  constructor(
    private pokedexService: PokedexService, private modalController: ModalController
  ) { }
  pokemonName : string;
  pokemon : PokedexData;

  ngOnInit() {
    this.pokedexService.getPokemons()
    .then(data => this.pokemon = data);
  }
  next() {
    this.pokedexService.getPokemonsByUrl(this.pokemon.next)
    .then(data => this.pokemon = data);

  }
  previous ()
 {
  this.pokedexService.getPokemonsByUrl(this.pokemon.previous)
  .then(data => this.pokemon = data);
 }
 presentModal(url) {
  this.modalController.create( { 
    component: PokemonDetailsPage,
    componentProps: { url: url }
  })
    .then(modal => modal.present());
}
}
