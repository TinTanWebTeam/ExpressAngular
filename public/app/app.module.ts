import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, appRoutingProviders}  from './app.routing';
import {AppComponent}   from './app.component';
import {NavComponent}   from './nav/nav.component';
import {HomeComponent}   from './home/home.component';
import {AboutComponent}   from './about/about.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent, NavComponent, HomeComponent, AboutComponent, LoginComponent, RegisterComponent],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {
}
