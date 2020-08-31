import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsLineLineStylesPage } from './charts-line-line-styles.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsLineLineStylesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsLineLineStylesPage]
})
export class ChartsLineLineStylesPageModule {}
