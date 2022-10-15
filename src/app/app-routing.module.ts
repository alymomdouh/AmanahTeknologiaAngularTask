import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  {
    path: 'product',
    loadChildren: () => import('./product-module/product-module.module').then(m => m.ProductModuleModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
