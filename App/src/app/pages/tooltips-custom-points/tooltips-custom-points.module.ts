import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TooltipsCustomPointsPage } from './tooltips-custom-points.page';

const routes: Routes = [
  {
    path: '',
    component: TooltipsCustomPointsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TooltipsCustomPointsPage]
})
export class TooltipsCustomPointsPageModule {}
