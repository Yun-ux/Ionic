import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercice1PageRoutingModule } from './exercice1-routing.module';

import { Exercice1Page } from './exercice1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercice1PageRoutingModule
  ],
  declarations: [Exercice1Page]
})
export class Exercice1PageModule {}
