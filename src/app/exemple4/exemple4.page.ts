import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemple4',
  templateUrl: './exemple4.page.html',
  styleUrls: ['./exemple4.page.scss'],
})
export class Exemple4Page implements OnInit {
  list = [
    'okita', 'zenitsu','sanosuke'
  ];

  constructor() { }

  ngOnInit() {
  }

}
