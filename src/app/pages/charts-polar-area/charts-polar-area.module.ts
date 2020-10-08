import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsPolarAreaPage } from './charts-polar-area.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsPolarAreaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsPolarAreaPage]
})
export class ChartsPolarAreaPageModule {}
