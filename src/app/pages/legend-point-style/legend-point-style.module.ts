import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LegendPointStylePage } from './legend-point-style.page';

const routes: Routes = [
  {
    path: '',
    component: LegendPointStylePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LegendPointStylePage]
})
export class LegendPointStylePageModule {}
