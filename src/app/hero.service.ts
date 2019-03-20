import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
 

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  //when use only heroService
  //constructor(private heroService: HeroService) {}
    constructor(private messageService: MessageService) { }

  //when using heros.mock
// getHeroes(): Observable<Hero[]> {
//   return of(HEROES);
// }

    getHeroes(): Observable<Hero[]> {
      // TODO: send the message _after_ fetching the heroes
      this.messageService.add('HeroService: fetched heroes');
      return of(HEROES);
    }
}
