import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo : '/login',
    pathMatch : 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'join',
    loadChildren: () => import('./page/join/join.module').then( m => m.JoinModule) 
  },
  {
    path: 'board',
    loadChildren: () => import('./page/board/board.module').then( m => m.BoardModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
