import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocialInfo } from '../api/model';
import { SocialService } from '../api/service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor(private readonly route: ActivatedRoute, private readonly socialService: SocialService) { }

  ngOnInit(): void {
    const socialInfo = this.route.snapshot.data['message'] as SocialInfo;
    this.socialService.update(socialInfo);
  }

}
