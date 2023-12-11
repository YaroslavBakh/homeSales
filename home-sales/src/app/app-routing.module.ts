import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'empty',
    loadChildren: () => import('./empty-route/empty-route.routing').then(m => m.EMPTY_ROUTES),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {bindToComponentInputs: true}
  )
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
