import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HeroDetailsComponent } from "./hero-detail.component";
import { HeroesComponent } from "./heroes.component";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailsComponent
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'

    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule { }