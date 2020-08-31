import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsAreaLineBoundariesPage } from './charts-area-line-boundaries.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsAreaLineBoundariesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsAreaLineBoundariesPage]
})
export class ChartsAreaLineBoundariesPageModule {}
