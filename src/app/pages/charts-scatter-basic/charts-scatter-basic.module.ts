import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsScatterBasicPage } from './charts-scatter-basic.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsScatterBasicPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsScatterBasicPage]
})
export class ChartsScatterBasicPageModule {}
