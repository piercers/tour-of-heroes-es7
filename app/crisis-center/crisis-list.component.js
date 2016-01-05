import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import Service from './crisis.service';

@Component({
  template: `
    <ul>
      <li *ngFor="#crisis of crises"
        [class.selected]="isSelected(crisis)"
        (click)="onSelect(crisis)">
        <span class="badge">{{crisis.id}}</span> {{crisis.name}}
      </li>
    </ul>
  `,
})
export default class CrisisListComponent {
  static get parameters() {
    return [Router, Service];
  }

  constructor(router, service) {
    this._router = router;
    this._service = service;
  }

  ngOnInit() {
    this._service.getCrises()
      .then(crises => this.crises = crises);
  }

  isSelected(crisis) {
    return crisis.id === this._selectedId;
  }

  onSelect(crisis) {
console.log('crisis: ', crisis);
    this._router.navigate(['CrisisDetail', {id: crisis.id}]);
  }

}
