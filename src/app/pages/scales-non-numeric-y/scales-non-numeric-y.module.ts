import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScalesNonNumericYPage } from './scales-non-numeric-y.page';

const routes: Routes = [
  {
    path: '',
    component: ScalesNonNumericYPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScalesNonNumericYPage]
})
export class ScalesNonNumericYPageModule {}
