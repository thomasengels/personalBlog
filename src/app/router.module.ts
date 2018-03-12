import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const APP_ROUTES: Routes = [
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      APP_ROUTES,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class RouteModule { }
