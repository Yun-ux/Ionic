import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exemple2Page } from './exemple2.page';

const routes: Routes = [
  {
    path: '',
    component: Exemple2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exemple2PageRoutingModule {}
