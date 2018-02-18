import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TypingModule } from '../../public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TypingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
