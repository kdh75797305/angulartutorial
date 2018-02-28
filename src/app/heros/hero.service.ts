import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HEROES } from '../mock-heroes';
import {Hero} from './hero';
import { MessageService} from '../messages/message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHero(): Observable<Hero[]> {
    this.messageService.add('test Message');
    setTimeout(() => {} , 5000);
    return of(HEROES);
  }

  /*
  getHero() {
    setTimeout(() => {} , 50000000);
    return HEROES;
  }*/
}

