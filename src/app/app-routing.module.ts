import { HomeAdmComponent } from './home-adm/home-adm.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { BatePontoComponent } from './bate-ponto/bate-ponto.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'BPONTO', component: BatePontoComponent},
  {path: 'HOME', component: HomeAdmComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
