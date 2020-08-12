import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsLineInterpolationModesPage } from './charts-line-interpolation-modes.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsLineInterpolationModesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsLineInterpolationModesPage]
})
export class ChartsLineInterpolationModesPageModule {}
