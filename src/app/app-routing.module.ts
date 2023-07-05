import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './basics/component1/component1.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  {path:"sections/01/Basics",component:Component1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
