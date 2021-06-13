import {Component, ViewChild} from '@angular/core';
import {ChildRefComponent} from "./child-ref/child-ref.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('childRef')
  childRef?: ChildRefComponent;

  counter = 0;
  lifecycleCounter = 0;
  interceptCounter = 0;
  title = 'component-parent-to-child';

  byBindingButtonClicked() {
    this.counter++;
  }

  byRefButtonClicked() {
    this.childRef?.increment()
  }

  byLifecycleButtonClicked() {
    this.lifecycleCounter++;
  }

  byInterceptButtonClicked() {
    this.interceptCounter++;
  }
}
