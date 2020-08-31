import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsAreaLineStackedPage } from './charts-area-line-stacked.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsAreaLineStackedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsAreaLineStackedPage]
})
export class ChartsAreaLineStackedPageModule {}
