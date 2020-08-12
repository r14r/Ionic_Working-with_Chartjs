import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScriptableBubblePage } from './scriptable-bubble.page';

const routes: Routes = [
  {
    path: '',
    component: ScriptableBubblePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScriptableBubblePage]
})
export class ScriptableBubblePageModule {}
