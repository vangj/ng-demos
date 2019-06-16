import { Component, OnInit } from '@angular/core';
import { ComService } from '../com.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  count = 0;
  messageReceived = '';
  
  constructor(private readonly comService: ComService) { 
    this.comService.parentMessage$.subscribe(m => this.messageReceived = m);
  }

  ngOnInit() {
  }

  clicked(): void {
    this.count += 1;
    this.comService.sendMessageFromChild(`hi child ${this.count}`);
  }
}
