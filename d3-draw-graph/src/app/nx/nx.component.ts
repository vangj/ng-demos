import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
declare var d3: any;

@Component({
  selector: 'app-nx',
  templateUrl: './nx.component.html',
  styleUrls: ['./nx.component.scss']
})
export class NxComponent implements OnInit {
  baseUrl = 'http://localhost:4200/assets/layout';
  layouts = [
    'spring', 'shell', 'spectral', 
    'spiral', 'planar', 'circular', 
    'kk', 'dot', 'neato', 
    'fdp', 'sfdp', 'circo', 
    'twopi', 'osage', 'patchwork'
  ];

  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
    this.getData('neato')
      .subscribe({
        next: d => this.visualize(d),
        error: e => console.error(e)
      });
  }

  doLayout(layout: string): void {
    console.log(layout);
    this.clear();
    this.getData(layout)
      .subscribe({
        next: d => this.visualize(d),
        error: e => console.error(e)
      });
  }

  private clear(): void {
    const svg = document.getElementById('dataviz');
    if (svg) {
      svg.innerHTML = '';
    }
  }

  private visualize(data: any): void {
    const margin = { top: 10, right: 30, bottom: 30, left: 40 },
      width = 600 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;

    const svg = d3.select('#dataviz')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const link = svg
      .selectAll('line')
      .data(data.links)
      .enter()
      .append('line')
        .style('stroke', '#aaa')
        .attr('x1', (d: any) => d.x1)
        .attr('y1', (d: any) => d.y1)
        .attr('x2', (d: any) => d.x2)
        .attr('y2', (d: any) => d.y2);

    const node = svg
      .selectAll('circle')
      .data(data.nodes)
      .enter()
      .append('circle')
        .attr('r', 20)
        .attr('cx', (d: any) => d.cx)
        .attr('cy', (d: any) => d.cy)
        .style('fill', '#69b3a2');
  }

  getData(layout: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });

    const url = `${this.baseUrl}/${layout}.json`;
    const options = { headers };
    const f = this.http.get<any>(url, options);
    return f;
  }
}
