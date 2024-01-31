import { Injectable } from '@angular/core';
import {List} from "../../types/list";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  private currentList: List = {
    date: new Date("2024-01-19"),
    first_list: {
      time: new Date().setHours(18, 30),
      players: ["Paul", "Louis", "Bennett", "Ben", "Nico", "Dario", "Jerry", "Mert", "Ahmed", "Belana", "Konstantin", "Ada"]
    },
    second_list: {
      time: new Date().setHours(20, 30),
      players: ["Paul", "Louis", "Bennett", "Ben", "Nico", "Dario"]
    }
  }
  constructor() { }

  getCurrentList(): Observable<List> {
      return of(this.currentList);
  }
}
