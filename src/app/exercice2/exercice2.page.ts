import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.page.html',
  styleUrls: ['./exercice2.page.scss'],
})
export class Exercice2Page implements OnInit {
  variable = null;
  list = [];

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.list.push(this.variable);
    this.variable = null;
  }
}
