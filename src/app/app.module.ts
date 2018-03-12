import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material.module";
import { HeaderComponent } from './components/shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';


import { AppComponent } from './app.component';
import { RouteModule } from './router.module';
import { DrawerComponent } from './components/shared/drawer/drawer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DrawerComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouteModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
