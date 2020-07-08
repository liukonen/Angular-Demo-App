import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
//import {HEROES} from './mockHeros';
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.sass']
})
export class HerosComponent implements OnInit {
  hero: Hero = {id: 1, name: "Superman"}
  heroes: Hero[];// HEROES;
  
  selectedHero: Hero;
  
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  getHeros(): void{
    this.heroService.getHeroeASYNC().subscribe(heroesService => this.heroes = heroesService);
    //this.heroes = this.heroService.getHeroes();
}

  ngOnInit(): void {
    this.getHeros();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

}
