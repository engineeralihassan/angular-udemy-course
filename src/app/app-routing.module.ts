import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './basics/component1/component1.component';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './basics/components/databinding/databinding.component';
// routing files
const routes: Routes = [

  {path:"sections/basics",component:Component1Component},
  {path:"sections/databinding",component:DatabindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
