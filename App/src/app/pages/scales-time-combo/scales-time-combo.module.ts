import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScalesTimeComboPage } from './scales-time-combo.page';

const routes: Routes = [
  {
    path: '',
    component: ScalesTimeComboPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScalesTimeComboPage]
})
export class ScalesTimeComboPageModule {}
