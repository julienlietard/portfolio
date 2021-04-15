import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  constructor() { }

  mode = 'light';

  // tslint:disable-next-line:typedef
  currentMode() {
    return this.mode;
  }
  setNight() {
    this.mode = 'night';
  }
  setLight() {
    this.mode = 'light';
  }
}
