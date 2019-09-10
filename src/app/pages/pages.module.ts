import { SharedModule } from '../shared/shared.module';

import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';

//Temporal
import { IngrementadorComponent } from '../components/ingrementador/ingrementador.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IngrementadorComponent
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IngrementadorComponent
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ]
}) 


export class PagesModule{}