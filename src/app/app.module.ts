import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataTablesModule } from 'angular-datatables';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { PeopleComponent } from './people/people.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FavouritesComponent,
    PeopleComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
