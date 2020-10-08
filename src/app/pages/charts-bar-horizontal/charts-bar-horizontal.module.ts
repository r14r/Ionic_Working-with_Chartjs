import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsBarHorizontalPage } from './charts-bar-horizontal.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsBarHorizontalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsBarHorizontalPage]
})
export class ChartsBarHorizontalPageModule {}
