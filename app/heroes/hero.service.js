import {Injectable} from 'angular2/core';
import heroes from './heroes';

const matching = (id) => heroes.filter(x => x.id === id);

@Injectable()
export default class HeroService {
  getHeroes() {
    return Promise.resolve(heroes);
  }

  getHero(id) {
    return Promise.resolve(matching(id)[0]);
  }
}
