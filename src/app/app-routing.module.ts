import { NgModule, Component } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

 
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
