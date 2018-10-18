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

  constructor(private http: HttpClient) {
  }

  changeTopic(topic: string) {
    switch (topic) {
      case 'MAIN': {
        this.getMainNewsSecondaryObservable().subscribe((news) => this.secondaryMainNews = news, (error) => console.log(error));
        this.getMainNewsObservable().subscribe((news) => this.mainNews = news, (error) => console.log(error));
        this.getRandomThreeObservable().subscribe((news) => this.randomthree = news, (error) => console.log(error));
        break;
      }
      case 'TECH': {
        this.mainNews = null;
        this.secondaryMainNews = null;
        this.getTechNewsObservable().subscribe((news) => this.secondaryMainNews = news, (error) => console.log(error));
        break;
      }
      case 'POLITICS': {
        this.mainNews = null;
        this.secondaryMainNews = null;
        this.getPoliticsObservable().subscribe((news) => this.secondaryMainNews = news, (error) => console.log(error));
        break;
      }
      case 'CULTURE': {
        this.mainNews = null;
        this.secondaryMainNews = null;
        this.getCultureObservable().subscribe((news) => this.secondaryMainNews = news, (error) => console.log(error));
        break;
      }
      case 'SPORT': {
        this.mainNews = null;
        this.secondaryMainNews = null;
        this.getSportObservable().subscribe((news) => this.secondaryMainNews = news, (error) => console.log(error));
        break;
      }
    }
  }

  public getActualWeatherObservable(): Observable<ActualWeather> {
    return this.http.get<ActualWeather>('http://localhost:8080/weather');
  }

  public getForecastObservable(city: string): Observable<Weather[]> {
    return this.http.get<Weather[]>('http://localhost:8080/forecast/?city=' + city);
  }

  public getNameDayObservable(): Observable<string> {
    return this.http.get('http://localhost:8080/nameday', {responseType: 'text'});
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


  public getMainNews() {
    this.getMainNewsObservable().subscribe((news) => this.mainNews = news, (error) => console.log(error));
  }
}
