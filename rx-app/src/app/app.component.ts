import { Component, AfterViewInit } from '@angular/core';
import { of, forkJoin, fromEvent, EMPTY, from, interval, throwError, zip, } from 'rxjs';
import { map, tap, flatMap, mapTo, scan, filter, debounceTime, concatMap, expand, toArray, catchError, mergeMap, switchMap, take, retry, share} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'rx-app';

  ngAfterViewInit(): void {
    this.doZip()
  }

  private doZip(): void {
    const ages = of(25, 34, 33);
    const names = of('john', 'jack', 'jake');

    zip(ages, names)
      .pipe(
        map(([age, name]) => ({name, age}))
      )
      .subscribe(x => console.log(x));
  }

  /**
   * Doesn't work according to latest docs. Pretty neat though.
   */
  private doShare(): void {
    const source = interval(1000)
      .pipe(
        tap(n => console.log(n)),
        take(5),
        share()
      );

    source.subscribe(
      n => `1: ${n}`,
      e => console.error(e)
    );

    source.subscribe(
      n => `2: ${n}`,
      e => console.error(e)
    );
  }

  private doRetry(): void {
    interval(1000)
      .pipe(
        mergeMap(v => v > 5 ? throwError(() => 'bad') : of(v)),
        retry(2)
      )
      .subscribe(
        v => console.log(v),
        e => console.error(`${e}`)
      );
  }

  private doInterval(): void {
    interval(1000)
      .pipe(take(5))
      .subscribe(r => console.log(r));
  }

  private doSwitchMap(): void {
    of(1, 2, 3)
      .pipe(
        switchMap(x => of(x + 1, x + 2, x + 3))
      )
      .subscribe(r => console.log(r));
  }

  /**
   * Convert a promise to an observable.
   */
  private doConvertPromise(): void {
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('i am a promise');
      }, 300);
    });

    from(p).subscribe(r => console.log(r));
  }

  private doCatch(): void {
    of(1, 2, 3, 4, 5).pipe(
      map(n => {
        if (n === 4) {
          throw `${n}`;
        }
        return n;
      }),
      catchError(e => of('?'))
    )
    .subscribe(r => console.log(r));
  }

  /**
   * Expand demo.
   * 
   * - https://rxjs-dev.firebaseapp.com/api/operators/expand
   * - https://stackoverflow.com/questions/43430536/rxjs-expand-array-from-promise
   * - https://ncjamieson.com/understanding-expand/
   */
  private doExpand(): void {
    const stuff = of({item: 0})
    .pipe(
      expand((data) => data.item < 10 ? of({item: data.item + 1}) : EMPTY),
      toArray()
    );
    stuff.subscribe((data) => console.log(data));
  }

  private doScan(): void {
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

  private doTap(): void {
    const a = of('a').pipe(tap(r => console.log(r)));
    const b = of('b').pipe(tap(r => console.log(r)));
    const c = of('c')
      .pipe(
        tap(r => console.log(r)),
        mergeMap(() => of('d'))
      );
    forkJoin([a, b, c])
      .subscribe(
        r => console.log(r),
        e => console.error(e)
      );
  }

  private doForkJoin(): void {
    const a = of('a');
    const b = of('b');
    const c = of('c')
      .pipe(
        mergeMap(() => of('d'))
      );
    forkJoin([a, b, c])
      .subscribe(
        r => console.log(r),
        e => console.error(e)
      );
  }

  /**
   * flatMap is deprecated use mergeMap
   */
  private doFlatMap(): void {
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

  private doMergeMap(): void {
    of('a')
      .pipe(
        tap(r => console.log(r)),
        mergeMap(r => of('b')),
        tap(r => console.log(r)),
        mergeMap(r => of('c'))
      )
      .subscribe(
        r => console.log(r),
        e => console.error(e)
      );
  }
}
