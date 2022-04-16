import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  current = 0;
  previous = -1;
  
  onPrevious(){
    this.previous = this.current --;
    console.log(this.onPrevious())
  }

  onNext(){
    this.previous = this.current ++;
    console.log(this.onNext())
  }
  constructor() { }

  ngOnInit(): void {
  }

}
