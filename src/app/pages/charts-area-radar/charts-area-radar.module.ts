import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsAreaRadarPage } from './charts-area-radar.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsAreaRadarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsAreaRadarPage]
})
export class ChartsAreaRadarPageModule {}
