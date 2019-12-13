import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercice1Page } from './exercice1.page';

const routes: Routes = [
  {
    path: '',
    component: Exercice1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercice1PageRoutingModule {}
