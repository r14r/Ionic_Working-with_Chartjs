import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsBarVerticalPage } from './charts-bar-vertical.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsBarVerticalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsBarVerticalPage]
})
export class ChartsBarVerticalPageModule {}
