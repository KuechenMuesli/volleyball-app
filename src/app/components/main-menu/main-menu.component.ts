import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit{
  gridTileHeight: number = 200;
  ngOnInit() {
    console.log("HERE")
    this.gridTileHeight = Math.round(700 * (window.innerHeight / window.innerWidth));
    console.log(this.gridTileHeight);
  }
}
