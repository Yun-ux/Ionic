import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FoodData} from '../_models/food';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  

  constructor(private HttpClient: HttpClient) { }

  getFoodDataByBarcode(barcode: string) {
    // va get l'api via l'url
    return this.HttpClient
    .get<FoodData>("https://world.openfoodfacts.org/api/v0/product/" + barcode + ".json")
    .toPromise();
 }
}