import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Score } from 'src/app/types/Score';

@Component({
  selector: 'app-par',
  templateUrl: './par.component.html',
  styleUrls: ['./par.component.css']
})
export class ParComponent implements OnInit {
  @Input() order: number = {} as number;
  @Output() parScoreEmitter = new EventEmitter();
  isDisabled: boolean = true;
  inputValue: number = {} as number;
  parScore: Score = {
    order : this.order.toString(),
    score : 0,
    kind : 'par',
    diff: 0,
  }

  constructor() { }

  ngOnInit(): void {
    this.parScore.order = this.order.toString();
  }

  toggleInput(){
    this.isDisabled = !this.isDisabled;
  }

  updateTotal(){
    if(this.inputValue != this.parScore.score){
      this.parScore.diff = this.inputValue-this.parScore.score; 
      this.parScore.score = this.inputValue;
      console.log("diff "+this.parScore.diff);
    }

    this.parScoreEmitter.emit(this.parScore);
  }

}
