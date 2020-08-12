import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TooltipsInteractionsPage } from './tooltips-interactions.page';

const routes: Routes = [
  {
    path: '',
    component: TooltipsInteractionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TooltipsInteractionsPage]
})
export class TooltipsInteractionsPageModule {}
