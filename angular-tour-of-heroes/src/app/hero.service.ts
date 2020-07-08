import { Injectable } from '@angular/core';
import {Hero} from './heros/hero';
import {HEROES} from './heros/mockHeros';
import {Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

getHeroes(): Hero[]{return HEROES;}

  getHeroeASYNC(): Observable<Hero[]>{
  // TODO: send the message _after_ fetching the heroes
  this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  constructor(private messageService: MessageService) { }
}
