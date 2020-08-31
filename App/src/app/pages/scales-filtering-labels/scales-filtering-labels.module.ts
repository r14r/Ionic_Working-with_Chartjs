import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScalesFilteringLabelsPage } from './scales-filtering-labels.page';

const routes: Routes = [
  {
    path: '',
    component: ScalesFilteringLabelsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScalesFilteringLabelsPage]
})
export class ScalesFilteringLabelsPageModule {}
