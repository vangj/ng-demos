import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  count = 0;
  @Output()
  clickEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  clicked(): void {
    this.count += 1;
    this.clickEmitter.emit(this.count);
  }

}
