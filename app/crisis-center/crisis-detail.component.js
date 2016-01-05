import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import DialogService from './../dialog.service';
import CrisisService from './crisis.service';

@Component({
  template: `
    <div *ngIf="crisis">
      <h3>"{{editName}}"</h3>

      <div>
        <label>Id: </label>{{crisis.id}}</div>
      <div>
        <label>Name: </label>
        <input [(ngModel)]="editName" placeholder="name"/>
      </div>

      <button (click)="save()">Save</button>
      <button (click)="cancel()">Cancel</button>
    </div>
  `,
})
export default class CrisisDetailComponent {
  static get parameters() {
    return [Router, RouteParams, CrisisService, DialogService];
  }

  constructor(router, routeParams, service, dialog) {
    this._router = router;
    this._service = service;
    this._dialog = dialog;
    this.id = parseInt(routeParams.get('id'));
  }

  ngOnInit() {
    this._service
      .getCrisis(this.id)
      .then(crisis => {
        if (crisis) {
          this.crisis = crisis;
          this.editName = crisis.name;
        } else {
          // id not found
          this.goToCrises();
        }
      });
  }

  routerCanDeactivate(next, prev) {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }

    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this._dialog.confirm('Discard changes?');
  }

  cancel() {
    this.editName = this.crisis.name;
    this.goToCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.goToCrises();
  }

  goToCrises() {
    this._router.navigate(['CrisisCenter', {id: this.id, foo: 'foo'}]);
  }

}
