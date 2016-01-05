import {Injectable} from 'angular2/core';
import crises from './crises';

@Injectable()
export default class CrisisService {
  getCrises() {
    return Promise.resolve(crises);
  }

  getCrisis(id) {
console.log('id: ', id);
console.log('crises: ', crises);
    return Promise.resolve(crises.filter(x => x.id === id)[0]);
  }
}
