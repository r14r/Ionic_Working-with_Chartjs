import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsLineSteppedPage } from './charts-line-stepped.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsLineSteppedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsLineSteppedPage]
})
export class ChartsLineSteppedPageModule {}
