import {Component, OnDestroy, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {ListsService} from "../../services/lists-service/lists.service";
import {Subscription} from "rxjs";
import {List} from "../../types/list";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  list: List = {
    date: new Date,
    first_list: {
      time: 0,
      players: []
    }
  };

  constructor(private http: HttpClient, private readonly listsService: ListsService) {}
  ngOnInit() {
    this.subscriptions.add(
      this.listsService.getCurrentList().subscribe({
        next: list => {
          this.list = list;
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
