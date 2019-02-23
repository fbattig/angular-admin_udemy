import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,  Routes  } from '@angular/router';

// Routes
import { APP_ROUTE } from './app-routing.module';
  

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    DashboardComponent,
    LoginComponent,
    ProgressComponent,  
    Graficas1Component,
    NopagefoundComponent,
    PagesComponent 

  ],
  imports: [
    BrowserModule,
    APP_ROUTE    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
