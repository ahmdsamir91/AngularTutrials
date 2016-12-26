import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component'


@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
            <nav>
               <a routerLink='/dashboard' routerLinkActive="active">dashboard</a>
               <a routerLink='/heroes' routerLinkActive="active">heroes</a>
            </nav>
              <router-outlet></router-outlet>
              `,
    styleUrls: ['app.component.css']

})
export class AppComponent{
    title = 'Tour of heroes';
}
