import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScalesLogarithmicScatterPage } from './scales-logarithmic-scatter.page';

const routes: Routes = [
  {
    path: '',
    component: ScalesLogarithmicScatterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScalesLogarithmicScatterPage]
})
export class ScalesLogarithmicScatterPageModule {}
