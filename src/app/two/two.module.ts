import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildTwoComponent } from './child-two/child-two.component';

const routes: Routes = [
  {
    path: 'two/childcomp',
    component: ChildTwoComponent
  }
];

@NgModule({
  declarations: [
    ChildTwoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class TwoModule {
  constructor() {
    console.log('Two module loaded');
  }
}
