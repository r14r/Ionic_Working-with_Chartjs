import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsLinePointSizesPage } from './charts-line-point-sizes.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsLinePointSizesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsLinePointSizesPage]
})
export class ChartsLinePointSizesPageModule {}
