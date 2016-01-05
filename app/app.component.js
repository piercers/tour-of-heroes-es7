import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import DialogService from './dialog.service';
import CrisisCenterComponent from './crisis-center/crisis-center.component';
import HeroService from './heroes/hero.service';
import HeroDetailComponent from './heroes/hero-detail.component';
import HeroListComponent from './heroes/hero-list.component';

@Component({
  selector: 'app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['CrisisCenter']">Crisis Center</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [DialogService, HeroService],
})
@RouteConfig([
  { // Crisis Center Child Route
    path: '/crisis-center/...',
    name: 'CrisisCenter',
    component: CrisisCenterComponent,
    useAsDefault: true,
  },

  {path: '/heroes', name: 'Heroes', component: HeroListComponent},
  {path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent},
])
export default class AppComponent {
  constructor() {
    this.title = 'Tour of Heroes';
  }
}

// - Alternative to the `static get parameters() {}` method above
// AppComponent.parameters = [HeroService];
