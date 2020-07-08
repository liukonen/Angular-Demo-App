import { Component, OnInit } from '@angular/core';

import {Hero} from './hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.sass']
})
export class HerosComponent implements OnInit {
  hero: Hero = {id: 1, name: "Superman"}
  constructor() { }

  ngOnInit(): void {
  }

}
