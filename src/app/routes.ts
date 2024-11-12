import {  Routes } from '@angular/router';


const routeConfig: Routes = [
  {
    path: 'explorer',
    loadComponent: () => import('./explorer/explorer.component').then((m) => m.ExplorerComponent)
  },
  {
    path: '',
    redirectTo: 'explorer',
    pathMatch: 'full'
  }
];


export default routeConfig;
