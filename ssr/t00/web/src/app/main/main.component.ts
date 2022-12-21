import { Component, OnInit } from '@angular/core';
import { LuckyService, SocialService } from '../api/service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private readonly luckyService: LuckyService, private readonly socialService: SocialService) { }

  ngOnInit(): void {
    this.luckyService.getSocial().subscribe(socialInfo => {
      this.socialService.update(socialInfo);
    });
  }
}
