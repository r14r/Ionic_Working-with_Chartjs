import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScalesGridlinesDisplayPage } from './scales-gridlines-display.page';

const routes: Routes = [
  {
    path: '',
    component: ScalesGridlinesDisplayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScalesGridlinesDisplayPage]
})
export class ScalesGridlinesDisplayPageModule {}
