import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentWayComponent } from './components/payment-way/payment-way.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ViewInvoiceComponent } from './components/view-invoice/view-invoice.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ProductListComponent },
  { path: 'paymentway/:id', component: PaymentWayComponent },
  { path: 'view-invoice/:id', component: ViewInvoiceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductModuleRoutingModule { }
