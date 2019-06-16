import { Component, OnInit } from '@angular/core';
import { ComService } from '../com.service';

@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html',
  styleUrls: ['./parent-two.component.css']
})
export class ParentTwoComponent implements OnInit {

  messageReceived = '';

  constructor(private readonly comService: ComService) { 
    comService.childMessages$.subscribe(m => {
      this.messageReceived = m;
      this.sendMessage();
    });
  }

  ngOnInit() {
  }

  sendMessage(): void {
    this.comService.sendMessageFromParent(`hi from parent ${Date.now()}`);
  }

}
