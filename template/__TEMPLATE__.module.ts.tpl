import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { __PNAME__Page } from './__FNAME__.page';

const routes: Routes = [
  {
    path: '',
    component: __PNAME__Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [__PNAME__Page]
})
export class __PNAME__PageModule {}
