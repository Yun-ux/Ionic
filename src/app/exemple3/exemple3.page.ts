import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemple3',
  templateUrl: './exemple3.page.html',
  styleUrls: ['./exemple3.page.scss'],
})
export class Exemple3Page implements OnInit {
  
  collapsed = true;

  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.collapsed = !this.collapsed;
  }

}
