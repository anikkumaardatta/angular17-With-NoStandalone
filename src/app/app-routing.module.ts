import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // },
  {
    path: 'users',
    component: UsersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
