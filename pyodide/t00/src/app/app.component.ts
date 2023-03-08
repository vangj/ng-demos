import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  worker?: Worker;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: any) {
    if (isPlatformBrowser(platformId)) {
      console.log('isPlatformBrowser');
      this.worker = new Worker(new URL('./app.worker', import.meta.url));
      this.worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.worker) {
        this.worker.postMessage('hello');
      }
    }
  }
}
