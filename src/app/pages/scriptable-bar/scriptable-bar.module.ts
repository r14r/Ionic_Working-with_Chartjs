import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScriptableBarPage } from './scriptable-bar.page';

const routes: Routes = [
  {
    path: '',
    component: ScriptableBarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScriptableBarPage]
})
export class ScriptableBarPageModule {}
