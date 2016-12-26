import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import { HeroSearchService } from "./hero-search.service";
import { Hero } from "./hero";

@Component({
    moduleId: module.id,
    selector: 'hero-search',
    templateUrl: 'hero-search.component.html',
    styleUrls: ['hero-search.component.css'],
    providers: [HeroSearchService]
})
export class heroSearchComponent implements OnInit {
    private searchTerms = new Subject<string>();
    heroes: Observable<Hero[]>;
    constructor(private heroSearchService: HeroSearchService,
        private router: Router) { }

    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300) // wait until 300ms pause in events
            .distinctUntilChanged() // ignore if the next search term is the same as previous
            .switchMap(term => term // switch to new observable each time
                // return the http search observable
                ? this.heroSearchService.search(term)
                // or the observable of empty heroes if no search terms
                : Observable.of<Hero[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }
    search(term: string): void {
        this.searchTerms.next(term)
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }

} 