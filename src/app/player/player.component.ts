import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Golf } from '../types/Golf';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, OnChanges {
  form: Golf = {
    course : '',
    player : '',
    holes : {} as number,
    holesArr : [],
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  isMetRequirements(){
    if(this.form.course != '' && this.form.holes > 0) return true;
    return false;
  }

  resetForm(){
    
  }

}
