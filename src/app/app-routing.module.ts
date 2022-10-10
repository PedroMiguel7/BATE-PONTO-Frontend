import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDtComponent } from './components/user-dt/user-dt.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { LoginComponent } from './login/login.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { Error404Component } from './error404/error404.component';
import { AuthGuardAdminService } from './services/auth-guard-admin.service';
import { AuthGuardUserService } from './services/auth-guard-user.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home-user', canActivate: [AuthGuardUserService], component: HomeUserComponent },
  { path: 'home-adm', canActivate: [AuthGuardAdminService], component: HomeAdminComponent },
  { path: 'users', canActivate: [AuthGuardAdminService], component: PessoasComponent },
  { path: 'users/:id', canActivate: [AuthGuardAdminService], component: UserDtComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
