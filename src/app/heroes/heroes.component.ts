import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROES } from '../services/mock-heroes';

import { HeroService } from '../hero.service'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes : Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService,
              private messageService: MessageService ) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(hero.id + ' ' + hero.name);
  }

  getHeroes(): void {
    //this.heroes = HEROES;
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
