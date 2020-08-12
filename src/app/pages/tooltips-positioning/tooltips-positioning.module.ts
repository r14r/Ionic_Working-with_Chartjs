import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TooltipsPositioningPage } from './tooltips-positioning.page';

const routes: Routes = [
  {
    path: '',
    component: TooltipsPositioningPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TooltipsPositioningPage]
})
export class TooltipsPositioningPageModule {}
