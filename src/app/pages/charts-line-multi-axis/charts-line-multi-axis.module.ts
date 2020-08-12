import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsLineMultiAxisPage } from './charts-line-multi-axis.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsLineMultiAxisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsLineMultiAxisPage]
})
export class ChartsLineMultiAxisPageModule {}
