import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { counterModule } from './counter/components/counter.module';
import { heroesModule } from './heroes/componentes/heroes.module';
import { BdzModule } from './bdz/bdz.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    counterModule,
    heroesModule,
    BdzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
