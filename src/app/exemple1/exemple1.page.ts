import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemple1',
  templateUrl: './exemple1.page.html',
  styleUrls: ['./exemple1.page.scss'],
})
export class Exemple1Page implements OnInit {

  maVariable = "Yuna"

  constructor() { }

  ngOnInit() {
    //permet de changer dans 5sec la variable qu'on a créer Yuna -> Yasmina
    setTimeout(() => {
      this.maVariable = "Yasmina";
    }, 5000)
  }
}
