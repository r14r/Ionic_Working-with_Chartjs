import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsBarStackedPage } from './charts-bar-stacked.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsBarStackedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsBarStackedPage]
})
export class ChartsBarStackedPageModule {}
