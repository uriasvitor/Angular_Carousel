import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/assets/animations/fadded.animation';
import { right,left } from 'src/assets/animations/slide.animation';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [fadeAnimation,
    trigger('animImageSlider', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ]
})

export class DetailsComponent implements OnInit {
  counter:number = 0;

  images =  [
    '../../../../../assets/img/1.png',
    '../../../../../assets/img/2.jpg',
    '../../../../../assets/img/3.jpg',
    '../../../../../assets/img/4.jpg',
    '../../../../../assets/img/5.jpg',
    '../../../../../assets/img/6.jpg',
    '../../../../../assets/img/7.jpg',
    '../../../../../assets/img/8.jpg',
    '../../../../../assets/img/9.jpg',
    '../../../../../assets/img/10.jpg',
    '../../../../../assets/img/11.png'
  ]

  currentState?: string;

  constructor() { }

  ngOnInit() {}
  

  public onPrevious(){
    if(this.counter > 0)
      this.counter --;
  }

  public onNext(){
    if(this.counter != this.images.length - 1)
      this.counter ++;
  }

}
