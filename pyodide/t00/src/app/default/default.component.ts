import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  worker?: Worker;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: any) { 
    if (isPlatformBrowser(platformId)) {
      this.worker = new Worker(new URL('../api/worker/default.worker', import.meta.url));
      this.worker.onmessage = ({ data }) => {
        console.log(`response: ${data}`);
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
