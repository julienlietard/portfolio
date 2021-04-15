import { Component, OnInit } from '@angular/core';
import {ModeService} from '../services/mode.service';

@Component({
  selector: 'app-lightmode',
  templateUrl: './lightmode.component.html',
  styleUrls: ['./lightmode.component.scss']
})
export class LightmodeComponent implements OnInit {

  constructor(public mode: ModeService) { }

  ngOnInit(): void {
  }

  light() {
    this.mode.setLight();
  }
}
