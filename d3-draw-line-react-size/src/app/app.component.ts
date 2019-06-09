import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { VizComponent } from './viz/viz.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  
  @ViewChild('viz', { static: true })
  viz: VizComponent;

  title = 'my-app';
  data: Array<any> = [{x: 0, y: 1}, {x: 1, y: 2}, {x: 2, y: 3}, {x:3, y: 4}, {x: 4, y: 5}];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.viz.draw();
  }

  doIt(): void {
    this.data = this.randData();
    this.viz.data = this.data;
    this.viz.draw();
  }

  randData(): Array<any> {
    const d = new Array<any>();
    for (let i = 0; i < 50; i++) {
      d.push({x: i, y: this.getRandomInt(10)});
    }
    return d;
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
