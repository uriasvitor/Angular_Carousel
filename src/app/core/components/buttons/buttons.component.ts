import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  @Input()
  current = 1;
  @Input()
  previous = -1;
  

  public onPrevious(){
    if(this.previous > 0)
    this.previous = this.current --;
  }

  public onNext(){
    if(this.previous < 9)
    this.previous = this.current ++;
  }
  constructor() { }
  ngDoCheck(){
    console.log(this.previous);
  }
  ngOnInit(): void {}

}
