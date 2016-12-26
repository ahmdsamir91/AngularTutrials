import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'Heroes.component.html',
    styleUrls: ['Heroes.component.css'],
})
export class HeroesComponent implements OnInit {

    selectedHero: Hero;
    heroes: Hero[];

    constructor(
        private router: Router,
        private heroService: HeroService) { }

    ngOnInit(): void {
        this.getHeroes();
    }
    getHeroes = function (): void {
        this.heroService.getHeroes().then((heroes: Hero[]) => this.heroes = heroes);
    }

    onSelect = function (hero: Hero): void {
        this.selectedHero = hero;
    }

    goToDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name).then(hero => this.heroes.push(hero));
    }
    delete(hero: Hero) {
        this.heroService.delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero)
                if (this.selectedHero === hero) { this.selectedHero = null; }
            })
    }
}
