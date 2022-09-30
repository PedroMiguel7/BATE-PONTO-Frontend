import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarUserComumComponent } from './components/sidebar-user-comum/sidebar-user-comum.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { JwtModule } from "@auth0/angular-jwt";
import { HeaderComponent } from './components/header/header.component';
import { CalendarioUserComponent } from './home-user/components/calendario-user/calendario-user.component';
import { GraficoUserComponent } from './home-user/components/grafico-user/grafico-user.component';
import { BatePontoUserComponent } from './home-user/components/bate-ponto-user/bate-ponto-user.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { UserDtComponent } from './components/user-dt/user-dt.component';
import { FrequenciaComponent } from './home-admin/components/frequencia/frequencia.component';
import { TabelaPessoasComponent } from './pessoas/tabela-pessoas/tabela-pessoas.component';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeAdminComponent,
    HomeUserComponent,
    SidebarComponent,
    HeaderComponent,
    SidebarUserComumComponent,
    CalendarioUserComponent,
    GraficoUserComponent,
    BatePontoUserComponent,
    PessoasComponent,
    UserDtComponent,
    FrequenciaComponent,
    TabelaPessoasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzInputModule,
    NzIconModule,
    NzAlertModule,
    NzCalendarModule,
    NzDropDownModule,
    NzBadgeModule,
    NzTableModule,
    NzDividerModule,
    NzSkeletonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["http://localhost:4200/"],
        disallowedRoutes: [""],
      },
    }),
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
