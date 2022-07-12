import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './component-inside-component/components/parent/parent.component';
import { Child1Component } from './component-inside-component/components/child1/child1.component';
import { Child2Component } from './component-inside-component/components/child2/child2.component';
import { Child3Component } from './component-inside-component/components/child3/child3.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    Child3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
