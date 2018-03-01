import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HerosComponent} from './heros/heros.component';

import {DashboardComponent} from './heros/dashboard/dashboard.component';
import {HeroDetailComponent} from './heros/hero-detail/hero-detail.component';

const routes: Routes = [
  {path: 'heros', component: HerosComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({

  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})




export class AppRoutingModule {

}
