import { Component, OnInit } from '@angular/core';
declare var d3: any;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  ngOnInit(): void {
    console.log('ngOnInit()');

    const margin = { top: 10, right: 30, bottom: 30, left: 40 },
      width = 400 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    const svg = d3.select('#dataviz')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const data = this.getData();
    const link = svg
      .selectAll('line')
      .data(data.links)
      .enter()
      .append('line')
        .style('stroke', '#aaa');
    const node = svg
      .selectAll('circle')
      .data(data.nodes)
      .enter()
      .append('circle')
        .attr('r', 20)
        .style('fill', '#69b3a2');
    
    const simulation = d3.forceSimulation(data.nodes)
      .force('link', d3.forceLink().id((d: any) => d.id).links(data.links))
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .on('end', () => {
        link
          .attr('x1', (d: any) => d.source.x)
          .attr('y1', (d: any) => d.source.y)
          .attr('x2', (d: any) => d.target.x)
          .attr('y2', (d: any) => d.target.y);
        
        node
          .attr('cx', (d: any) => d.x + 6)
          .attr('cy', (d: any) => d.y - 6);
      })


    console.log('done');

  }

  private getData(): any {
    return {
      nodes: [
        {
          id: 1,
          name: 'A'
        },
        {
          id: 2,
          name: 'B'
        },
        {
          id: 3,
          name: 'C'
        },
        {
          id: 4,
          name: 'D'
        },
        {
          id: 5,
          name: 'E'
        },
        {
          id: 6,
          name: 'F'
        },
        {
          id: 7,
          name: 'G'
        },
        {
          id: 8,
          name: 'H'
        },
        {
          id: 9,
          name: 'I'
        },
        {
          id: 10,
          name: 'J'
        }
      ],
      links: [
    
        {
          source: 1,
          target: 2
        },
        {
          source: 1,
          target: 5
        },
        {
          source: 1,
          target: 6
        },
    
        {
          source: 2,
          target: 3
        },
                {
          source: 2,
          target: 7
        }
        ,
    
        {
          source: 3,
          target: 4
        },
         {
          source: 8,
          target: 3
        }
        ,
        {
          source: 4,
          target: 5
        }
        ,
    
        {
          source: 4,
          target: 9
        },
        {
          source: 5,
          target: 10
        }
      ]
    }    
  }
}
