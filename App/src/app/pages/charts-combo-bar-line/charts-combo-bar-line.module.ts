import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsComboBarLinePage } from './charts-combo-bar-line.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsComboBarLinePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsComboBarLinePage]
})
export class ChartsComboBarLinePageModule {}
