import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Score } from 'src/app/types/Score';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.css']
})
export class PlayerScoreComponent implements OnInit {
  @Input() order: number = {} as number;
  @Output() playerEmitter = new EventEmitter();
  isDisabled: boolean = true;
  inputValue: number = {} as number;
  parScore: string = '';

  playerScore: Score = {
    order: this.order.toString(),
    score: 0,
    kind: 'player',
    diff: 0,
  }

  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.playerScore.order = this.order.toString();
  }

  toggleInput(){
    this.isDisabled = !this.isDisabled;
  }

  updateTotal(){
    if(this.inputValue != this.playerScore.score){
      this.playerScore.diff = this.inputValue-this.playerScore.score;
      this.playerScore.score = this.inputValue;
    }

    if(this.scoreService.parScoreHash[this.playerScore.order] > this.playerScore.score) this.parScore = 'under';
    else if(this.playerScore.score == this.scoreService.parScoreHash[this.playerScore.order]) this.parScore = '';
    else this.parScore = 'over'

    this.playerEmitter.emit(this.playerScore);
  }

}
