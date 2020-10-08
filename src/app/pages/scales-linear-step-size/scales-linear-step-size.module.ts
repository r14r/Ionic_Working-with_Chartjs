import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScalesLinearStepSizePage } from './scales-linear-step-size.page';

const routes: Routes = [
  {
    path: '',
    component: ScalesLinearStepSizePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScalesLinearStepSizePage]
})
export class ScalesLinearStepSizePageModule {}
