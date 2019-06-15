import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.css']
})
export class ParentOneComponent implements OnInit {

  count = 0;

  constructor() { }

  ngOnInit() {
  }

  onClicked(count: number): void {
    this.count = count;
  }

}
