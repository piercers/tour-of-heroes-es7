import {Component} from 'angular2/core';

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
    </div>
  `,
})
export default class HeroDetailComponent {}
