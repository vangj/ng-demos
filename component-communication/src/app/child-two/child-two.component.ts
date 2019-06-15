import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  count = 0;
  
  constructor() { }

  ngOnInit() {
  }

  clicked(): void {
    this.count += 1;
  }
}
