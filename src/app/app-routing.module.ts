import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./pages/list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'detail',
    loadChildren: () =>
      import('./pages/detail/detail.module').then((m) => m.DetailModule),
  },
  {
    path: 'crud',
    loadChildren: () =>
      import('./pages/crud/crud.module').then((m) => m.CrudModule),
  },
  {
    path: 'my-characters',
    loadChildren: () =>
      import('./pages/my-characters/my-Characters.module').then(
        (m) => m.MyCharactersModule
      ),
  },
  {
    path: 'show-mixing',
    loadChildren: () =>
      import('./pages/show-mixing/show-mixing.module').then(
        (m) => m.ShowMixingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
