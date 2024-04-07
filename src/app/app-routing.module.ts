import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'explorer',
    loadChildren: () => import('./explorer/explorer.module').then((m) => m.ExplorerModule)
  },
  {
    path: '',
    redirectTo: 'explorer',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
