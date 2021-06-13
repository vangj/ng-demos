import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 0;
  msPastEpoch = 0;
  title = 'component-child-to-parent';

  incrementCounter() {
    ++this.counter;
  }

  decrementCounter() {
    --this.counter;
  }

  onTimer(event: any): void {
    this.msPastEpoch = event;
  }
}
