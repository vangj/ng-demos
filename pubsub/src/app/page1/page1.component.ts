import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from '../api/service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnDestroy {
  subscription: Subscription;

  constructor(private readonly eventService: EventService) { 
    this.subscription = eventService.global.subscribe({
      next: r => console.log(r),
      error: e => console.error(e)
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
