import {Injectable} from 'angular2/core';
import heroes from './heroes';

@Injectable()
export default class HeroService {
  getHeroes() {
    return Promise.resolve(heroes);
  }
}
