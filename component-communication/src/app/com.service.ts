import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComService {

  private parentSource = new Subject<string>();
  private childSource = new Subject<string>();
  public readonly parentMessage$: Observable<string> = 
    this.parentSource.asObservable();
  public readonly childMessages$: Observable<string> = 
    this.childSource.asObservable();

  constructor() { }

  sendMessageFromParent(msg: string): void {
    this.parentSource.next(msg);
  }

  sendMessageFromChild(msg: string): void {
    this.childSource.next(msg);
  }
}
