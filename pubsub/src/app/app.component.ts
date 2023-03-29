import { Component } from '@angular/core';
import { EventService } from './api/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly eventService: EventService) { }

  btn1Clicked(): void {
    this.eventService.global.next({message: `btn 1 clicked @ ${new Date()}`});
  }

  btn2Clicked(): void {
    this.eventService.global.next({message: `btn 1 clicked @ ${new Date()}`});
  }
}
