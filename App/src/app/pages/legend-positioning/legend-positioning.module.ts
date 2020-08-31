import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LegendPositioningPage } from './legend-positioning.page';

const routes: Routes = [
  {
    path: '',
    component: LegendPositioningPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LegendPositioningPage]
})
export class LegendPositioningPageModule {}
