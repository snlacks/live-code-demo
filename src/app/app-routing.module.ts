import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: 'people', component: PeopleComponent},
  { path: '', component: HomeComponent }
];scrollBy
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
