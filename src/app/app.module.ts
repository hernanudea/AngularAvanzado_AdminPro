import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { APP_ROUTES } from './app.routes';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagesModule } from './pages/pages.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTES
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
