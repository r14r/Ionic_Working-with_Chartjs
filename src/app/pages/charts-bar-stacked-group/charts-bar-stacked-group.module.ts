import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsBarStackedGroupPage } from './charts-bar-stacked-group.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsBarStackedGroupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsBarStackedGroupPage]
})
export class ChartsBarStackedGroupPageModule {}
