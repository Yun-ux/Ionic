import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercice2PageRoutingModule } from './exercice2-routing.module';

import { Exercice2Page } from './exercice2.page';
import {IonicStorageModule} from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercice2PageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [Exercice2Page]
})
export class Exercice2PageModule {}
