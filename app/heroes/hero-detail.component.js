import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import HeroService from './hero.service';

@Component({
  selector: 'my-hero-detail',
  inputs: ['hero'],
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input type="text" [(ngModel)]="hero.name" placeholder="name">
      </div>

      <button (click)="goToHeroes()">Back</button>
    </div>
  `,
})
export default class HeroDetailComponent {
  static get parameters() {
    return [Router, RouteParams, HeroService];
  }

  constructor(router, routeParams, heroService) {
    this._router = router;
    this._routeParams = routeParams;
    this._heroService = heroService;
  }

  ngOnInit() {
    this.id = this._routeParams.get('id');

    this._heroService
      .getHero(this.id)
      .then(hero => this.hero = hero);
  }

  goToHeroes() {
    this._router.navigate(['Heroes', {id: this.id, foo: 'foo'}]);
  }
}
