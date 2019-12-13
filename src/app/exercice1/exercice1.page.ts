import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.page.html',
  styleUrls: ['./exercice1.page.scss'],
})
export class Exercice1Page implements OnInit {

  nombre = 0;
  timer;
  started = false;
  constructor() { }

  ngOnInit() {
  }
  start() {
    this.started = true;
    this.timer = setInterval(() => { 
      this.nombre++;
    }, 1000);
  }
  stop(){
    this.started = false;
    clearInterval(this.timer);
  
}
  reset() {
    this.nombre = 0;
  }
  
}
