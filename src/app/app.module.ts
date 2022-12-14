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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

import { JwtModule } from '@auth0/angular-jwt';
import { HeaderComponent } from './components/header/header.component';
import { CalendarioUserComponent } from './home-user/components/calendario-user/calendario-user.component';
import { GraficoUserComponent } from './home-user/components/grafico-user/grafico-user.component';
import { BatePontoUserComponent } from './home-user/components/bate-ponto-user/bate-ponto-user.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { UserDtComponent } from './user-dt/user-dt.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FrequenciaComponent } from './home-admin/components/frequencia/frequencia.component';
import { TabelaPessoasComponent } from './pessoas/components/tabela-pessoas/tabela-pessoas.component';
import { EditPessoaComponent } from './pessoas/components/edit-pessoa/edit-pessoa.component';
import { DeletePessoaComponent } from './pessoas/components/delete-pessoa/delete-pessoa.component';
import { PostPessoaComponent } from './pessoas/components/post-pessoa/post-pessoa.component';
import { GraficoComponent } from './home-admin/components/grafico/grafico.component';
import { Error404Component } from './error404/error404.component';
import { DetalhesPessoaComponent } from './pessoas/components/detalhes-pessoa/detalhes-pessoa.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
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
    BatePontoUserComponent,
    PessoasComponent,
    UserDtComponent,
    FrequenciaComponent,
    TabelaPessoasComponent,
    EditPessoaComponent,
    DeletePessoaComponent,
    PostPessoaComponent,
    GraficoUserComponent,
    GraficoComponent,
    Error404Component,
    DetalhesPessoaComponent,
  ],
  imports: [
    Ng2SearchPipeModule,
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
    NzModalModule,
    NzPopconfirmModule,
    NzFormModule,
    NzButtonModule,
    NzSelectModule,
    NgxChartsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['http://localhost:4200/'],
        disallowedRoutes: [''],
      },
    }),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
