import { Component, OnInit } from '@angular/core';
import { Hero} from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heroes: Hero[];
  selected_Hero: Hero;

  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.heroService.getHero().subscribe(
      heroes => this.heroes = heroes
    );
  }

  onSelect(hero: Hero) {
    alert(hero.name);
    this.selected_Hero = hero;
  }
}
