import { Component, OnInit } from '@angular/core';
import { Hero} from './hero';
import {HEROES} from '../mock-heroes';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name : 'default_hero'
  };
  heroes = HEROES;
  selected_Hero: Hero ;//= this.hero;
  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero) {
    alert(hero.name);
    this.selected_Hero = hero;
  }

}
