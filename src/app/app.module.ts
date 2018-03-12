import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material.module";
import { HeaderComponent } from './components/shared/header/header.component';


import { AppComponent } from './app.component';
import { RouteModule } from './router.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
