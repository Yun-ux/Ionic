import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemple2',
  templateUrl: './exemple2.page.html',
  styleUrls: ['./exemple2.page.scss'],
})
export class Exemple2Page implements OnInit {

  nombre = 0;
  isHighlighted = false;

  constructor() { }

  ngOnInit() {
  }
  // ajoute un au nombre
  ajouter() {
    this.nombre++;
  }
  diminuer() {
    this.nombre--;
  }
  highLight() {
    this.isHighlighted = true;
  }
}
