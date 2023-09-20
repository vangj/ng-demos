import { Component, OnInit } from '@angular/core';
declare var d3:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'd3-external';

  ngOnInit(): void {
    const svg = d3.select('#canvas');
    const data = [
      {x: 10, y: 10, width: 100, height: 10},
      {x: 10, y: 30, width: 80, height: 10}
    ];

    svg
      .append('g')
      .selectAll()
      .data(data)
      .join('rect')
        .attr('x', (d: any) => d.x)
        .attr('y', (d: any) => d.y)
        .attr('height', (d: any) => d.height)
        .attr('width', (d: any) => d.width);
  }
  
}
