import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { LoginComponent } from './login/login.component';
import { PessoasComponent } from './pessoas/pessoas.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home-adm", component: HomeAdminComponent },
  { path: "home-user", component: HomeUserComponent },
  { path: "users", component: PessoasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
