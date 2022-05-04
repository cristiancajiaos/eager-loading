import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildOneComponent } from './child-one/child-one.component';

const routes: Routes = [
  {
    path: 'one/childcomp',
    component: ChildOneComponent
  },
];

@NgModule({
  declarations: [
    ChildOneComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
})
export class OneModule {
  constructor() {
    console.log('One module loaded')
  }
}
