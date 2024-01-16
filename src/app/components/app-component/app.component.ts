import { Component, OnInit, OnDestroy } from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'volleyball-app';
  private subscriptions: Subscription = new Subscription();
  sidebarOpened: boolean = true;
  isMobile: boolean = false;

  constructor(private readonly responsive: BreakpointObserver) {
  }

  ngOnInit() {
    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {
        this.isMobile = result.matches;
      })
  }

  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
