import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScalesTimeFinancialPage } from './scales-time-financial.page';

const routes: Routes = [
  {
    path: '',
    component: ScalesTimeFinancialPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScalesTimeFinancialPage]
})
export class ScalesTimeFinancialPageModule {}
