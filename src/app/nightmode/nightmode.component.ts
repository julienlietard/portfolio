import { Component, OnInit } from '@angular/core';
import {ModeService} from '../services/mode.service';

@Component({
  selector: 'app-nightmode',
  templateUrl: './nightmode.component.html',
  styleUrls: ['./nightmode.component.scss']
})
export class NightmodeComponent implements OnInit {

  constructor(public mode: ModeService) { }

  ngOnInit(): void {
  }

  night() {
    this.mode.setNight();
  }
}
