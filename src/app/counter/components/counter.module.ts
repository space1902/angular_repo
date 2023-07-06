import { NgModule, Component } from '@angular/core';
import { AppCounter } from './counter/counter.component';

@NgModule({
  declarations: [AppCounter],
  exports: [AppCounter]
})
export class counterModule { }
