import { Component, OnInit, Input, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { fromEvent, Observable,Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as d3 from 'd3';

@Component({
  selector: 'app-viz',
  templateUrl: './viz.component.html',
  styleUrls: ['./viz.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VizComponent implements OnInit, AfterViewInit {
  
  @ViewChild('container', { static: true }) 
  container : ElementRef;
  
  @Input()
  data: Array<any>;

  resizeObs: Observable<Event>;
  resizeSub: Subscription;

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    this.resizeObs = fromEvent(window, 'resize');
    this.resizeSub = this.resizeObs
      .pipe(debounceTime(1000))
      .subscribe(e => {
        this.draw();
      });
  }

  private getSvgWidth(): number {
    return this.container.nativeElement.offsetWidth - 10;
  }

  private getSvgHeight(): number {
    return 500;
  }

  private getMaxY(): number {
    return Math.max(...this.data.map(item => item.y));
  }

  private getMaxX(): number {
    return Math.max(...this.data.map(item => item.x));
  }

  public draw(): void {
    if (!(this.data && this.data.length > 0)) {
      return;
    }

    const svgHtml = document.getElementById('lineChart');
    svgHtml.innerHTML = '';

    const margin = {
      top: 50,
      right: 50,
      bottom: 50,
      left: 50
    };

    const svgWidth = this.getSvgWidth();
    const svgHeight = this.getSvgHeight();
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;
    const n = this.data.length;
    const xScale = d3.scaleLinear()
      .domain([0, n - 1])
      .range([0, width]);
    const yScale = d3.scaleLinear()
      .domain([0, this.getMaxY()])
      .range([height, 0]);
    const xAxis = d3.axisBottom(xScale)
      .tickValues(this.data.map(item => item.x).filter(v => v % 2 == 0 ? true : false))
      // .tickFormat((d, i) => {
      //   return i % 2 == 0 ? d : '';
      // })
      .tickSize(5);
    const yAxis = d3.axisLeft(yScale);
    const line = d3.line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d.y))
      .curve(d3.curveMonotoneX);

    const svg = d3.select('#lineChart')
      .attr('width', svgWidth)
      .attr('height', svgHeight)
      .append('g')
      .attr('id', 'gLine')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis)
      .selectAll('text')
        .style('text-anchor', 'end')
        .attr('dx', '-.8em')
        .attr('dy', '.15em')
        .attr('transform', 'rotate(-65)');

    svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis);

    svg.append('path')
      .datum(this.data)
      .attr('class', 'line')
      .attr('d', line);

    svg.selectAll('.dot')
      .data(this.data)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', (d, i) => xScale(i))
      .attr('cy', (d) => yScale(d.y))
      .attr('r', 5);
  }

}
