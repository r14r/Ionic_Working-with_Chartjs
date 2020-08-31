import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsLineBasicPage } from './charts-line-basic.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsLineBasicPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsLineBasicPage]
})
export class ChartsLineBasicPageModule {}
