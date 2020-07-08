import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mockHeros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.sass']
})
export class HerosComponent implements OnInit {
  hero: Hero = {id: 1, name: "Superman"}
  heroes = HEROES;
  
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  
  constructor() { }



  ngOnInit(): void {
  }

}
