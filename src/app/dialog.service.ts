import { Injectable } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DialogComponent} from './dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openDialog(article: string, title: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.maxWidth = '60vw';

    dialogConfig.data = {
      title: title,
      article: article
    };

    this.dialog.open(DialogComponent, dialogConfig);
  }
}
