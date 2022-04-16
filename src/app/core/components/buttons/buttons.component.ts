import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  @Input()
  page = 0;
  @Input()
  current = 0;
  @Input()
  previous = -1;
  
  maxPage:number = 9;

  public onPrevious(){
    if(this.previous > 0)
    this.previous = this.current --;
  }

  public onNext(){
    if(this.previous < this.maxPage)
    this.previous = this.current ++;
  }
  constructor() { }
  ngDoCheck(){
    console.log(this.previous);
  }
  ngOnInit(): void {}

}
