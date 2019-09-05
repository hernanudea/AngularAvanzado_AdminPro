import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from '../pages/nopagefound/nopagefound.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    NopagefoundComponent
  ],

  exports: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    NopagefoundComponent
  ]
})

export class SharedModule { }
