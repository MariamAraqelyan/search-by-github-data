import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {SearchDataInfoComponent} from "./microComponents/search-data-info/search-data-info.component";

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path:'item/:id',
    component: SearchDataInfoComponent
  },
  {
    path: '**',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
