import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainMenuComponent} from "./components/main-menu/main-menu.component";
import {ListsComponent} from "./components/lists/lists.component";

const routes: Routes = [
  {path:"", redirectTo:"info", pathMatch:"full"},
  {path:"info", component:MainMenuComponent},
  {path:"anmeldung", component:ListsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
