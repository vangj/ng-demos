import { Component, AfterViewInit } from '@angular/core';
import { of, forkJoin, fromEvent, EMPTY, } from 'rxjs';
import { map, tap, flatMap, mapTo, scan, filter, debounceTime, concatMap, expand, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'rx-app';

  ngAfterViewInit(): void {
    this.doExpandDemo()
  }

  /**
   * Expand demo.
   * 
   * - https://rxjs-dev.firebaseapp.com/api/operators/expand
   * - https://stackoverflow.com/questions/43430536/rxjs-expand-array-from-promise
   * - https://ncjamieson.com/understanding-expand/
   */
  private doExpandDemo(): void {
    const stuff = of({item: 0})
    .pipe(
      expand((data) => data.item < 10 ? of({item: data.item + 1}) : EMPTY),
      toArray()
    );
    stuff.subscribe((data) => console.log(data));
  }

  private doScanDemo(): void {
    fromEvent(document, 'click')
      .pipe(
        mapTo(1),
        debounceTime(500),
        scan((acc, one) => acc + one, 0),
        filter(r => r % 2 === 0)
      )
      .subscribe(
        r => console.log(r),
        e => console.error(e)
      );
  }

  private doTapDemo(): void {
    const a = of('a').pipe(tap(r => console.log(r)));
    const b = of('b').pipe(tap(r => console.log(r)));
    const c = of('c')
      .pipe(
        tap(r => console.log(r)),
        flatMap(() => of('d'))
      );
    forkJoin([a, b, c])
      .subscribe(
        r => console.log(r),
        e => console.error(e)
      );
  }

  private doForkJoinDemo(): void {
    const a = of('a');
    const b = of('b');
    const c = of('c')
      .pipe(
        flatMap(() => of('d'))
      );
    forkJoin([a, b, c])
      .subscribe(
        r => console.log(r),
        e => console.error(e)
      );
  }

  private doFlatMapDemo(): void {
    of('a')
    .pipe(
      flatMap(r => {
        console.log(r);
        return of('b');
      }),
      flatMap(r => {
        console.log(r);
        return of('c');
      })
    )
    .subscribe(
      r => console.log(r),
      e => console.error(e)
    );
  }
}
