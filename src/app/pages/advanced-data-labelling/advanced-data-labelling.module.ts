import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdvancedDataLabellingPage } from './advanced-data-labelling.page';

const routes: Routes = [
  {
    path: '',
    component: AdvancedDataLabellingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdvancedDataLabellingPage]
})
export class AdvancedDataLabellingPageModule {}
