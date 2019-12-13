import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercice2Page } from './exercice2.page';

const routes: Routes = [
  {
    path: '',
    component: Exercice2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercice2PageRoutingModule {}
