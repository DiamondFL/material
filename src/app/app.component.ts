import {Component, OnInit} from '@angular/core';
import {Hero} from "./classes/hero";
import {HeroService} from "./services/hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit{
  title = 'Tour of Heroes';

  // heroes: Hero[];
  // selectedHero: Hero;
  // constructor(private heroService: HeroService) {
  //
  // }
  // getHeroes(): void {
  //   this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  // }
  ngOnInit(): void {
    // this.getHeroes();
  }
  // onSelect(hero: Hero): void {
  //   console.log(hero);
  //   this.selectedHero = hero;
  // }
}