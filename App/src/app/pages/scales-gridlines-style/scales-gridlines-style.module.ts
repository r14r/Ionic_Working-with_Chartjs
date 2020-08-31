import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScalesGridlinesStylePage } from './scales-gridlines-style.page';

const routes: Routes = [
  {
    path: '',
    component: ScalesGridlinesStylePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScalesGridlinesStylePage]
})
export class ScalesGridlinesStylePageModule {}
