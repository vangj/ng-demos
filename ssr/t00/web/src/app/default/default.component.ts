import { Component, OnInit } from '@angular/core';
import { LuckyService, SocialService } from '../api/service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  constructor(private readonly luckyService: LuckyService, private readonly socialService: SocialService) { }

  ngOnInit(): void {
    this.luckyService.getSocial().subscribe(socialInfo => {
      this.socialService.update(socialInfo);
    });
  }
}
