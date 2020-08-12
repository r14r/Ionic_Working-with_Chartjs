import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsLineSkipPointsPage } from './charts-line-skip-points.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsLineSkipPointsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsLineSkipPointsPage]
})
export class ChartsLineSkipPointsPageModule {}
