import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { IndexfrontComponent } from './components/indexfront/indexfront.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { BodyComponentComponent } from './components/body-component/body-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
let rutas: Routes=[{path:"", component:IndexfrontComponent}];
@NgModule({
  declarations: [
    AppComponent,
    IndexfrontComponent,
    HeaderComponentComponent,
    BodyComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
