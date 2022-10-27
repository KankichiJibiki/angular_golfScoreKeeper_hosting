import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Golf } from 'src/app/types/Golf';
import { Score } from 'src/app/types/Score';
import { ScoreService } from './score.service';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.css']
})
export class ScoringComponent implements OnInit, OnChanges {
  @Input() form: Golf = {} as Golf;
  parTotal: number = 0;
  playerTotal: number = 0;
  playerResult: number = 0;
  isParReady: boolean = false;
  isFinished: boolean = false;
  playerScoreCount: number = 0;


  constructor(private scoreService: ScoreService) { 
    
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  createHoleTable(){
    this.form.holesArr = [];
    for(let i = 1; i <= this.form.holes; i++){
      this.form.holesArr.push(i);
    }
    return this.form.holesArr;
  }

  updateTotal(scoreObj: Score){
    if(scoreObj.kind == 'par') {
      this.parTotal += scoreObj.diff == 0 ? scoreObj.score : scoreObj.diff;
      this.scoreService.registerParScore(scoreObj);
    }
    else {
      console.log(this.playerScoreCount);
      if(this.playerScoreCount >= this.form.holesArr.length-1){
        this.isFinished = true;
      }

      if(scoreObj.diff == 0) this.playerTotal += scoreObj.score;
      else this.playerTotal += scoreObj.diff;
      this.playerResult = this.playerTotal - this.parTotal;
      this.playerScoreCount++;
    }
  }

  resetScore(){
    this.scoreService.parScoreHash = {};
    this.form.course = '';
    this.form.holes = {} as number;
    this.form.holesArr = [];
    this.form.player = '';
    this.playerScoreCount = 0;
    this.isFinished = false;
  }

}
