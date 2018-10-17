import {Component, Input, OnInit} from '@angular/core';
import {DialogService} from '../dialog.service';
import {News} from '../news';

@Component({
  selector: 'app-recently-added-news',
  templateUrl: './recently-added-news.component.html',
  styleUrls: ['./recently-added-news.component.css']
})
export class RecentlyAddedNewsComponent implements OnInit {
  @Input() news: News[];

  constructor(public dialog: DialogService) { }

  ngOnInit() {
  }

}
