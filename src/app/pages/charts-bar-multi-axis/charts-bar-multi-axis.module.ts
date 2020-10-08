import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsBarMultiAxisPage } from './charts-bar-multi-axis.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsBarMultiAxisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsBarMultiAxisPage]
})
export class ChartsBarMultiAxisPageModule {}
