import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!



import { CalendarModule, DateAdapter } from 'angular-calendar';
import { SchedulerModule } from 'angular-calendar-scheduler';

import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    MatDialogModule,
    CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory}),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DialogComponent]
})
export class AppModule { }
