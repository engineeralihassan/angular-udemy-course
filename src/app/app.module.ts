import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './basics/component1/component1.component';
import { DatabindingComponent } from './basics/components/databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './basics/components/directives/directives.component';
@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    DatabindingComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
