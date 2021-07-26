import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { CommonsComponent } from './pages/commons/commons.component';
import { OrderComponent } from './pages/order/order.component';
import { CapitalLetterPipe } from './pipes/capital-letters.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { OrderPipe } from './pipes/order.pipe';




@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    CommonsComponent,
    OrderComponent,
    CapitalLetterPipe,
    CanFlyPipe,
    OrderPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    NumbersComponent,
    NotCommonsComponent,
    CommonsComponent,
    OrderComponent
  ]
})
export class SalesModule { }
