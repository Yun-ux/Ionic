import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {

  @Input() url;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.url);
  }

  previous() {
    this.modalCtrl.dismiss();
  }

}
