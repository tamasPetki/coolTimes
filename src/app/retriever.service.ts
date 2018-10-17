import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {News} from './news';

@Injectable({
  providedIn: 'root'
})
export class RetrieverService {

  news: News[];

  constructor(private http: HttpClient) { }

  public getNewsObservable(): Observable<News[]> {
    return this.http.get<News[]>('http://localhost:3000/news');
  }

  public getNews() {
    this.getNewsObservable().subscribe((news) => this.news = news, (error) => console.log(error));
  }
}
