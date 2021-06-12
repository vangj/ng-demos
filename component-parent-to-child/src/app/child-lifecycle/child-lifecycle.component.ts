import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child-lifecycle',
  templateUrl: './child-lifecycle.component.html',
  styleUrls: ['./child-lifecycle.component.scss']
})
export class ChildLifecycleComponent implements OnInit, OnChanges {

  @Input()
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.counter.previousValue) {
      return;
    }

    this.counter++;
  }

}
