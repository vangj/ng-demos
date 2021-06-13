import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-intercept',
  templateUrl: './child-intercept.component.html',
  styleUrls: ['./child-intercept.component.scss']
})
export class ChildInterceptComponent implements OnInit {
  private _counter = 0;

  @Input()
  get counter(): number { return this._counter; }
  set counter(counter: number) { this._counter = counter; }

  constructor() { }

  ngOnInit(): void {
  }

}
