import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CommonsComponent } from './sales/pages/commons/commons.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { NotCommonsComponent } from './sales/pages/not-commons/not-commons.component';
import { OrderComponent } from './sales/pages/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: CommonsComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumbersComponent,
  },
  {
    path:'not-commons',
    component: NotCommonsComponent,
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
];

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
