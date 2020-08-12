import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScalesLogarithmicLinePage } from './scales-logarithmic-line.page';

const routes: Routes = [
  {
    path: '',
    component: ScalesLogarithmicLinePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScalesLogarithmicLinePage]
})
export class ScalesLogarithmicLinePageModule {}
