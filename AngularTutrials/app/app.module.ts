import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from "./heroes.component";
import { DashboardComponent } from "./dashboard.component";
import { HeroDetailsComponent } from "./hero-detail.component";
import { heroSearchComponent } from "./hero-search.component";

import { HeroService } from './hero.service';

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule, HttpModule,
        //InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [AppComponent, HeroDetailsComponent, HeroesComponent, DashboardComponent, heroSearchComponent],
    bootstrap: [AppComponent],
    providers: [HeroService]
})
export class AppModule { }
