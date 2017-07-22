import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { HeaderComponent } from './header/header.component';


import 'hammerjs';
import {MdButtonModule, MdToolbarModule, MdIconModule, MdTabsModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
     FlexLayoutModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
