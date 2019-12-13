import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exemple2PageRoutingModule } from './exemple2-routing.module';

import { Exemple2Page } from './exemple2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exemple2PageRoutingModule
  ],
  declarations: [Exemple2Page]
})
export class Exemple2PageModule {}
