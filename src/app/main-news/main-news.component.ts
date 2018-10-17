import {Component, Input, OnInit} from '@angular/core';
import {News} from '../news';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.css']
})
export class MainNewsComponent implements OnInit {
  @Input() news: News[];

  constructor() { }

  ngOnInit() {
  }

}
