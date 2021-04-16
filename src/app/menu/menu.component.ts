import { Component, OnInit } from '@angular/core';
import {ModeService} from '../services/mode.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public mode: ModeService) { }

  ngOnInit(): void {
  }

}
