import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-ref',
  templateUrl: './child-ref.component.html',
  styleUrls: ['./child-ref.component.scss']
})
export class ChildRefComponent implements OnInit {

  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment(): void {
    this.counter++;
  }

}
