import { Component } from '@angular/core';
import {ModeService} from './services/mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PORTFOLIO | Julien Lietard';

  constructor(public mode: ModeService) {
  }
}
