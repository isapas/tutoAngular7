import { Component, OnInit } from '@angular/core';
     
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
  selectedHero: Hero;
 
  heroes: Hero[];
 
  constructor(private heroService: HeroService) { }
  //in case using heroes.mock
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  
  ngOnInit() {
    this.getHeroes();
  }
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  //si injection depuis 
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
   //in case using with rxjs
   getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}