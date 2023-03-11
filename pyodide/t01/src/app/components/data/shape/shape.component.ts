import { Component, OnInit } from '@angular/core';
import { from, mergeMap } from 'rxjs';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getShape(): void {
    from(fetch('assets/py/get-shape.py'))
      .pipe(
        mergeMap(r => from(r.text())),
        mergeMap(script => from((window as any).__pyodide__.asyncRun(script, {})))
      )
      .subscribe({
        next: r => console.log(r),
        error: e => console.error(e)
      });
  }

  fetchShape() {
    fetch('assets/py/get-shape.py')
      .then(r => {
        const script = r.text();
        return script;
      })
      .then(script => {
        const p = (window as any).__pyodide__.asyncRun(script, {});
        return p;
      })
      .then(r => {
        console.log(r);
      });
  }

}
