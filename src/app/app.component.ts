import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CoolTimes';

  showWeather = false;

  toggleWeather() {
    this.showWeather = !this.showWeather;
    console.log('asdf');
  }


}
