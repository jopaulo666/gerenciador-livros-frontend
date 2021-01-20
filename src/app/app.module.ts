import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { LivrosService } from './livros.service';
import { LivrosModule } from './livros/livros.module';
import { TemplateModule } from './template/template.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    LivrosModule
  ],
  providers: [
    LivrosService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
