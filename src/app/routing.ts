import {Routes} from "@angular/router";
import {DashboardComponent} from "./features/dashboard/dashboard.component";

export const PAGES: Pages[] = [
  {
    icon: "home",
    title: "Dashboard",
    route: ""
  }
]

export interface Pages {
  icon: string,
  title: string,
  route: string
}

export const routes: Routes = [{
  path: '',
  component: DashboardComponent
}, {
  path: '**',
  component: DashboardComponent
}];
