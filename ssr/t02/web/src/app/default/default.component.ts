import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data, SocialInfo } from '../api/model';
import { LuckyService, SocialService } from '../api/service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  data: Array<Data> = [];
  
  constructor(private readonly route: ActivatedRoute, private readonly socialService: SocialService, private readonly luckyService: LuckyService) { }

  ngOnInit(): void {
    const socialInfo = this.route.snapshot.data['message'] as SocialInfo;
    this.socialService.update(socialInfo);
    this.nextData();
  }

  nextData(): void {
    this.luckyService.getData().subscribe(data => this.data = data);
  }

}
