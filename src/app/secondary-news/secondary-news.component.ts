import {Component, Input, OnInit} from '@angular/core';
import {News} from '../news';
import {RetrieverService} from '../retriever.service';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-secondary-news',
  templateUrl: './secondary-news.component.html',
  styleUrls: ['./secondary-news.component.css']
})
export class SecondaryNewsComponent implements OnInit {
  @Input() news: News[];

  constructor(private retriever: RetrieverService, private dialog: MatDialog) { }

  openDialog(article: string, title: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: title,
      article: article
    };

    this.dialog.open(DialogComponent, dialogConfig);
  }

  ngOnInit() {
  }

}
