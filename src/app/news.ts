export class News {

  id: number;
  author: string;
  date: string;
  title: string;
  article: string;
  imgurl: string;
  category: string;
  summary: string;

  constructor(id: number, author: string, date: string, title: string, article: string, imgurl: string, category: string, summary: string) {
    this.id = id;
    this.author = author;
    this.date = date;
    this.title = title;
    this.article = article;
    this.imgurl = imgurl;
    this.category = category;
    this.summary = summary;
  }

}
