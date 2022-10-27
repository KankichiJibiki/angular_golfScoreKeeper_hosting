import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoringComponent } from './scoring/scoring.component';
import { PlayerComponent } from './player.component';
import { FormsModule } from '@angular/forms';
import { ParComponent } from './scoring/par/par.component';
import { PlayerScoreComponent } from './scoring/player-score/player-score.component';



@NgModule({
  declarations: [
    PlayerComponent,
    ScoringComponent,
    ParComponent,
    PlayerScoreComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class PlayerModule { }
