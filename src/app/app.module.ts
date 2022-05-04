import { OneModule } from './one/one.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { OneComponent } from './one/one.component';

const routes: Routes = [
  { path: 'one', component: OneComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    OneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    OneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
