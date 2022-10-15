import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModuleRoutingModule } from './product-module-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PaymentWayComponent } from './components/payment-way/payment-way.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewInvoiceComponent } from './components/view-invoice/view-invoice.component';


@NgModule({
  declarations: [
    ProductListComponent,
    PaymentWayComponent,
    ViewInvoiceComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductModuleRoutingModule
  ]
})
export class ProductModuleModule { }
