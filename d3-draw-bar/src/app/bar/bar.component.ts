import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BarComponent implements OnInit {

  data: any = [
    { x: 'car', y: 500 },
    { x: 'house', y: 2000 },
    { x: 'electricity', y: 100 },
    { x: 'gas', y: 80 },
    { x: 'water', y: 50 },
    { x: 'credit card', y: 300 },
    { x: 'car insurance', y: 200 },
    { x: 'life insurance', y: 200 }
  ];

  constructor() { }

  ngOnInit() {
    this.draw();
  }

  private getSvgWidth(): number {
    return 500;
  }

  private getSvgHeight(): number {
    return 250;
  }

  private getMaxY(): number {
    return Math.max(...this.data.map(item => item.y));
  }

  private getMaxX(): number {
    return Math.max(...this.data.map(item => item.x));
  }

  private draw(): void {
    const svgHtml = document.getElementById('barChart');
    svgHtml.innerHTML = '';

    const margin = {
      top: 50,
      right: 50,
      bottom: 100,
      left: 50
    };

    const svgWidth = this.getSvgWidth();
    const svgHeight = this.getSvgHeight();
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;

    const xScale = d3.scaleBand()
      .rangeRound([0, width])
      .domain(this.data.map(item => item.x))
      .padding(0.1);
    const yScale = d3
      .scaleLinear()
      .domain([0, this.getMaxY()])
      .rangeRound([height, 0]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    const svg = d3.select('#barChart')
      .attr('width', svgWidth)
      .attr('height', svgHeight)
      .append('g')
        .attr('id', 'gBar')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis)
      .selectAll('text')
        .style('text-anchor', 'end')
        .attr('dx', '-.8em')
        .attr('dy', '.15em')
        .attr('transform', 'rotate(-65)');
    
    svg.append('g')
      .call(yAxis)
      .append('text')
        .attr('fill', '#000')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .attr('Cost');
    
    svg.selectAll('.bar')
      .data(this.data)
      .enter()
      .append('rect')
        .attr('class', 'bar')
        .attr('x', d => xScale(d.x))
        .attr('y', d => yScale(d.y))
        .attr('width', xScale.bandwidth())
        .attr('height', d => height - yScale(d.y));
  }

}
