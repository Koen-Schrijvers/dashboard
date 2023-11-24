import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineBirdComponent } from './dashboard/line-bird/line-bird.component';
import { BarChartComponent } from './dashboard/bar-chart/bar-chart.component';
import { LineLionComponent } from './dashboard/line-lion/line-lion.component';
import { MapsensorComponent } from './dashboard/mapsensor/mapsensor.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LineBirdComponent,
    BarChartComponent,
    LineLionComponent,
    MapsensorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
