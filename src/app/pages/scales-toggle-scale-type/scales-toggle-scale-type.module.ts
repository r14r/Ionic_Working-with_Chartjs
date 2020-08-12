import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScalesToggleScaleTypePage } from './scales-toggle-scale-type.page';

const routes: Routes = [
  {
    path: '',
    component: ScalesToggleScaleTypePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScalesToggleScaleTypePage]
})
export class ScalesToggleScaleTypePageModule {}
