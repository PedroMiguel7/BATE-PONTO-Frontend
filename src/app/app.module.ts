import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BatePontoComponent } from './bate-ponto/bate-ponto.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeAdmComponent } from './home-adm/home-adm.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BatePontoComponent,
    SidebarComponent,
    HomeAdmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
