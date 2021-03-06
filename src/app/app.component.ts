import { Component, OnInit} from '@angular/core';
import {RetrieverService} from './retriever.service';
import {News} from './news';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'CoolTimes';
  news: News[];
  actualWeather: object;
  showWeather = false;
  nameDay: string;

  toggleWeather() {
    this.showWeather = !this.showWeather;
    console.log(this.actualWeather);
  }

  constructor(public retriever: RetrieverService) {}

  ngOnInit() {
    this.retriever.getActualWeatherObservable().subscribe((weather) => this.actualWeather = weather);
    this.retriever.getNameDayObservable().subscribe((name) => this.nameDay = name);

    this.retriever.getMainNewsSecondaryObservable().subscribe((news) => this.retriever.secondaryMainNews = news,
      (error) => console.log(error),
      () => console.log('ready'));
    this.retriever.getMainNewsObservable().subscribe((news) => this.retriever.mainNews = news,
      (error) => console.log(error),
      () => console.log('ready'));
    this.retriever.getRandomThreeObservable().subscribe((news) => this.retriever.randomthree = news,
      (error) => console.log(error),
      () => console.log('ready'));
    this.retriever.getCultureAD().subscribe((advert) => this.retriever.advert = advert, (error) => console.log(error));
  }
}
