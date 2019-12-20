import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PokemonDetailsRequest } from 'src/app/_models/pokemon-details';
import { PokedexService } from 'src/app/_services/pokedex.service';
import { RadialChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';



@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {

  @Input() url;

  model: PokemonDetailsRequest
  
// RADAR CHART FOR POKEMON STATS
   radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
   radarChartLabels: Label[] = [];

   radarChartData: ChartDataSets[] = [
    { data: [], label: '' }
  ];
   radarChartType: ChartType = 'radar';
   // END
  constructor(
    private modalCtrl: ModalController,
    private pokedexService: PokedexService
  ) { }
    // initialisation
  ngOnInit() {
    this.pokedexService
    .getDetails(this.url)
    .then(data => {
      this.model = data;
      this.radarChartLabels = data.stats.map(s => s.stat.name);
      this.radarChartData[0].data = data.stats.map(s=> s.base_stat);
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}

