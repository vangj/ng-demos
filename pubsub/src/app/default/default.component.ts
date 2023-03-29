import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from '../api/service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnDestroy {
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
