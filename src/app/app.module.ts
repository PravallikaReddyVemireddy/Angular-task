import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {AirtelService} from './airtel.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GameComponent } from './game/game.component';
import { StudyComponent } from './study/study.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { TiciacComponent } from './ticiac/ticiac.component';
import { WordleComponent } from './wordle/wordle.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PageNotFoundComponent,
    GameComponent,
    StudyComponent,
    SudokuComponent,
    TiciacComponent,
    WordleComponent,
  //  routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AirtelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
