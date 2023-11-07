import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'empty',
    loadChildren: () => import('./empty-route/empty-route.routing').then(m => m.EMPTY_ROUTES),
  },
  // {
  //   path: 'with-library',
  //   loadChildren: () => import('./with-library/with-library.routing').then(m =>  m.WITH_LIBRARY_ROUTES),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
