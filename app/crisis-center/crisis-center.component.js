import {Component} from 'angular2/core';
import {RouterOutlet, RouteConfig} from 'angular2/router';
import CrisisService from './crisis.service';
import CrisisListComponent from './crisis-list.component';
import CrisisDetailComponent from './crisis-detail.component';

@Component({
  template: `
    <h2>Crisis Center</h2>
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet],
  providers: [CrisisService],
})
@RouteConfig([
  {path: '/', name: 'CrisisCenter', component: CrisisListComponent, useAsDefault: true},
  {path: '/:id', name: 'CrisisDetail', component: CrisisDetailComponent},
])
export default class CrisCenterComponent {}
