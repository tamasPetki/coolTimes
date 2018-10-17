import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {News} from './news';
import {ActualWeather} from './actual-weather';
import {Weather} from './weather/weather';

@Injectable({
  providedIn: 'root'
})
export class RetrieverService {

  news: News[];

  constructor(private http: HttpClient) { }

  public getNewsObservable(): Observable<News[]> {
    return this.http.get<News[]>('http://localhost:3000/news');
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

  public getNews() {
    this.getNewsObservable().subscribe((news) => this.news = news, (error) => console.log(error));
  }
}
