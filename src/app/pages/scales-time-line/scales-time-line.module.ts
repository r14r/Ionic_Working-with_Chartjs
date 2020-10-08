import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScalesTimeLinePage } from './scales-time-line.page';

const routes: Routes = [
  {
    path: '',
    component: ScalesTimeLinePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScalesTimeLinePage]
})
export class ScalesTimeLinePageModule {}
