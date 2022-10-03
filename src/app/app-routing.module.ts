import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDtComponent } from './components/user-dt/user-dt.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { LoginComponent } from './login/login.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { Error404Component } from './error404/error404.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home-adm', canActivate: [ AuthGuardService ], component: HomeAdminComponent },
  { path: 'home-user', canActivate: [ AuthGuardService ], component: HomeUserComponent },
  { path: 'users', canActivate: [ AuthGuardService ], component: PessoasComponent },
  { path: 'users/:id', canActivate: [ AuthGuardService ], component: UserDtComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
