import {Component} from 'angular2/core';

@Component({
  selector: 'hero-form',
  templateUrl: 'app/hero-form.html',
})
export default class HeroFormComponent {
  powers = [
    'Really Smart',
    'Super Flexible',
    'Super Hot',
    'Weather Changer',
  ];

  model = {
    id: 18,
    name: 'Dr IQ',
    power: this.powers[0],
    alterEgo: 'Chuck Overstreet',
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // TODO Remove after dev
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
