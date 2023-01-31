import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { UserListComponent } from './components/user/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: NavComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'users', component: UserListComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
