import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'exemple1',
    pathMatch: 'full'
  },
  {
    path: 'exemple1',
    loadChildren: () => import('./exemple1/exemple1.module').then( m => m.Exemple1PageModule)
  },
  {
    path: 'exemple2',
    loadChildren: () => import('./exemple2/exemple2.module').then( m => m.Exemple2PageModule)
  },
  {
    path: 'exercice1',
    loadChildren: () => import('./exercice1/exercice1.module').then( m => m.Exercice1PageModule)
  },
  {
    path: 'exemple3',
    loadChildren: () => import('./exemple3/exemple3.module').then( m => m.Exemple3PageModule)
  },
  {
    path: 'exemple4',
    loadChildren: () => import('./exemple4/exemple4.module').then( m => m.Exemple4PageModule)
  },
  {
    path: 'exemple5',
    loadChildren: () => import('./exemple5/exemple5.module').then( m => m.Exemple5PageModule)
  },
  {
    path: 'exercice2',
    loadChildren: () => import('./exercice2/exercice2.module').then( m => m.Exercice2PageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
