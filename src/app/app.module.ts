import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MainNewsComponent } from './main-news/main-news.component';
import { SecondaryNewsComponent } from './secondary-news/secondary-news.component';
import { RecentlyAddedNewsComponent } from './recently-added-news/recently-added-news.component';
import { HttpClientModule} from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import {RetrieverService} from './retriever.service';

@NgModule({
  declarations: [
    AppComponent,
    MainNewsComponent,
    SecondaryNewsComponent,
    RecentlyAddedNewsComponent,
    WeatherComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [RetrieverService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
