import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/api/model';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent implements OnInit {

  @Input()
  data: Array<Data> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
