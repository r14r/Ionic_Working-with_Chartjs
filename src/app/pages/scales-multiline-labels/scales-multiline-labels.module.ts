import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScalesMultilineLabelsPage } from './scales-multiline-labels.page';

const routes: Routes = [
  {
    path: '',
    component: ScalesMultilineLabelsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScalesMultilineLabelsPage]
})
export class ScalesMultilineLabelsPageModule {}
