import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-bind',
  templateUrl: './child-bind.component.html',
  styleUrls: ['./child-bind.component.scss']
})
export class ChildBindComponent implements OnInit {

  @Input()
  counter = 0;

  @Output()
  counterChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  incrementCounter(): void {
    this.counterChange.emit(++this.counter);
  }

  decrementCounter() {
    this.counterChange.emit(--this.counter);
  }
}
