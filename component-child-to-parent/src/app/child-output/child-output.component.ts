import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.scss']
})
export class ChildOutputComponent implements OnInit, OnDestroy {

  @Output()
  timer = new EventEmitter<number>();
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.timer.emit(Date.now())
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
