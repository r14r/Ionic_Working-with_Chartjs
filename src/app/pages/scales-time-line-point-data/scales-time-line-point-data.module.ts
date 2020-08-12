import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScalesTimeLinePointDataPage } from './scales-time-line-point-data.page';

const routes: Routes = [
  {
    path: '',
    component: ScalesTimeLinePointDataPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScalesTimeLinePointDataPage]
})
export class ScalesTimeLinePointDataPageModule {}
