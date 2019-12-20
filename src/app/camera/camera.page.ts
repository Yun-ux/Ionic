import { Component, OnInit } from '@angular/core';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import { FoodService } from '../_services/food.service';
import { FoodData } from '../_models/food';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  constructor(private scanner: BarcodeScanner,
    private foodService: FoodService) { }
    
    barcode: string;
    model: FoodData;

  ngOnInit() {
   
  }
  scan() {
    this.scanner.scan().then(codebar => {
      this.barcode = codebar.text;
      this.foodService.getFoodDataByBarcode(this.barcode)
      .then(data => this.model = data);

    }).catch(() => {
      this.foodService.getFoodDataByBarcode("5410056185784")
      .then(data => this.model = data);
    });
  }

}
