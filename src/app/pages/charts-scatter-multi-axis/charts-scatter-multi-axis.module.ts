import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsScatterMultiAxisPage } from './charts-scatter-multi-axis.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsScatterMultiAxisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsScatterMultiAxisPage]
})
export class ChartsScatterMultiAxisPageModule {}
