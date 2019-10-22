import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!



import { CalendarModule, DateAdapter } from 'angular-calendar';
import { SchedulerModule } from 'angular-calendar-scheduler';

import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
