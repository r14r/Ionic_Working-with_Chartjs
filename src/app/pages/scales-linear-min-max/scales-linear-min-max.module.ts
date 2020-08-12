import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScalesLinearMinMaxPage } from './scales-linear-min-max.page';

const routes: Routes = [
  {
    path: '',
    component: ScalesLinearMinMaxPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScalesLinearMinMaxPage]
})
export class ScalesLinearMinMaxPageModule {}
