import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {News} from './news';
import {ActualWeather} from './actual-weather';
import {Weather} from './weather/weather';

@Injectable({
  providedIn: 'root'
})

export class RetrieverService {

  public mainNews: News;
  public secondaryMainNews: News[];
  public randomthree: News[];
  activeTab = 'MAIN';
  public advert: {adImgURL: string};

  constructor(private http: HttpClient) {
  }

  changeTopic(topic: string) {
    switch (topic) {
      case 'MAIN': {
        this.getMainNewsSecondaryObservable().subscribe((news) => this.secondaryMainNews = news, (error) => console.log(error));
        this.getMainNewsObservable().subscribe((news) => this.mainNews = news, (error) => console.log(error));
        this.getRandomThreeObservable().subscribe((news) => this.randomthree = news, (error) => console.log(error));
        this.activeTab = 'MAIN';
        break;
      }
      case 'TECH': {
        this.mainNews = null;
        this.secondaryMainNews = null;
        this.getTechNewsObservable().subscribe((news) => this.secondaryMainNews = news, (error) => console.log(error));
        this.getTechAD().subscribe((advert) => this.advert = advert, (error) => console.log(error));
        this.activeTab = 'TECH';
        break;
      }
      case 'POLITICS': {
        this.mainNews = null;
        this.secondaryMainNews = null;
        this.getPoliticsObservable().subscribe((news) => this.secondaryMainNews = news, (error) => console.log(error));
        this.getPoliticsAD().subscribe((advert) => this.advert = advert, (error) => console.log(error));
        this.activeTab = 'POLITICS';
        break;
      }
      case 'CULTURE': {
        this.mainNews = null;
        this.secondaryMainNews = null;
        this.getCultureObservable().subscribe((news) => this.secondaryMainNews = news, (error) => console.log(error));
        this.getCultureAD().subscribe((advert) => this.advert = advert, (error) => console.log(error));
        this.activeTab = 'CULTURE';
        break;
      }
      case 'SPORT': {
        this.mainNews = null;
        this.secondaryMainNews = null;
        this.getSportObservable().subscribe((news) => this.secondaryMainNews = news, (error) => console.log(error));
        this.getSportsAD().subscribe((advert) => this.advert = advert, (error) => console.log(error));
        this.activeTab = 'SPORT';
        break;
      }
    }
  }

  public getActualWeatherObservable(): Observable<ActualWeather> {
    return this.http.get<ActualWeather>('https://sleepy-woodland-71007.herokuapp.com/weather');
  }

  public getForecastObservable(city: string): Observable<Weather[]> {
    return this.http.get<Weather[]>('https://sleepy-woodland-71007.herokuapp.com/forecast/?city=' + city);
  }

  public getNameDayObservable(): Observable<string> {
    return this.http.get('https://sleepy-woodland-71007.herokuapp.com/nameday', {responseType: 'text'});
  }


  public getMainNewsSecondaryObservable(): Observable<News[]> {
    return this.http.get<News[]>('https://gentle-stream-55752.herokuapp.com/news/randomthree');
  }

  public getMainNewsObservable(): Observable<News> {
    return this.http.get<News>('https://gentle-stream-55752.herokuapp.com/news/main');
  }

  public getTechNewsObservable(): Observable<News[]> {
    return this.http.get<News[]>('https://gentle-stream-55752.herokuapp.com/news/category/tech');
  }

  public getPoliticsObservable(): Observable<News[]> {
    return this.http.get<News[]>('https://gentle-stream-55752.herokuapp.com/news/category/politics');
  }

  public getCultureObservable(): Observable<News[]> {
    return this.http.get<News[]>('https://gentle-stream-55752.herokuapp.com/news/category/culture');
  }

  public getSportObservable(): Observable<News[]> {
    return this.http.get<News[]>('https://gentle-stream-55752.herokuapp.com/news/category/sport');
  }

  public getRandomThreeObservable(): Observable<News[]> {
    return this.http.get<News[]>('https://gentle-stream-55752.herokuapp.com/news/latestthree');
  }

  public getTechAD(): Observable<{adImgURL: string}> {
    return this.http.get<{adImgURL: string}>('https://gentle-crag-70979.herokuapp.com/tech');
  }

  public getSportsAD(): Observable<{adImgURL: string}> {
    return this.http.get<{adImgURL: string}>('https://gentle-crag-70979.herokuapp.com/sport');
  }

  public getPoliticsAD(): Observable<{adImgURL: string}> {
    return this.http.get<{adImgURL: string}>('https://gentle-crag-70979.herokuapp.com/politics');
  }

  public getCultureAD(): Observable<{adImgURL: string}> {
    return this.http.get<{adImgURL: string}>('https://gentle-crag-70979.herokuapp.com/culture');
  }

  public getMainAD(): Observable<{adImgURL: string}> {
    return this.http.get<{adImgURL: string}>('https://gentle-crag-70979.herokuapp.com/main');
  }
}
