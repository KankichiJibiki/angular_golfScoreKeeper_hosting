import { Injectable } from '@angular/core';
import { ParObj } from 'src/app/types/ParObj';
import { Score } from 'src/app/types/Score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  parScoreHash: ParObj = {};
  constructor() { }

  registerParScore(scoreObj: Score){
    this.parScoreHash[scoreObj.order] = scoreObj.score;
    console.log(this.parScoreHash);
  }
}
