import { Component, AfterViewInit } from '@angular/core';
import { of, forkJoin, fromEvent } from 'rxjs';
import { map, tap, flatMap, mapTo, scan, filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'rx-app';

  ngAfterViewInit(): void {
    this.doScanDemo();
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
    forkJoin(a, b, c)
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
    forkJoin(a, b, c)
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
