import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './game/board/board.component';
import { ButtonComponent } from './game/button/button.component';
import { GameComponent } from './game/game/game.component';
import { ScoreComponent } from './game/score/score.component';
import { TimerComponent } from './game/timer/timer.component';
import { SettingsComponent } from './game/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ButtonComponent,
    GameComponent,
    ScoreComponent,
    TimerComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
