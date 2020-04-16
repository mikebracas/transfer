import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

import { LoginComponent } from './login/login.component';
import { SidebarAnonimoComponent } from './sidebar-anonimo/sidebar-anonimo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChartPieComponent } from './chart-pie/chart-pie.component';
import { CurrentBalanceComponent } from './current-balance/current-balance.component';
import { TransferComponent } from './transfer/transfer.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transfer', component: TransferComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarAnonimoComponent,
    DashboardComponent,
    NavbarComponent,
    ChartPieComponent,
    CurrentBalanceComponent,
    TransferComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule
    //,
    //StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
