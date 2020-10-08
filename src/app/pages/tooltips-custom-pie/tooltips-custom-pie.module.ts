import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TooltipsCustomPiePage } from './tooltips-custom-pie.page';

const routes: Routes = [
  {
    path: '',
    component: TooltipsCustomPiePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TooltipsCustomPiePage]
})
export class TooltipsCustomPiePageModule {}
