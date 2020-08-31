import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsDoughnutPage } from './charts-doughnut.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsDoughnutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsDoughnutPage]
})
export class ChartsDoughnutPageModule {}
