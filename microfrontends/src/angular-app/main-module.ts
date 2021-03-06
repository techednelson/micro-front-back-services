import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import AngularApp from './angular-app.component';
import Subroute1 from './subroute1.component';
import Subroute2 from './subroute2.component';
import {enableProdMode} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";

const appRoutes: Routes = [
  {
    path: 'subroute1',
    component: Subroute1
  },
  {
    path: 'subroute2',
    component: Subroute2
  },
];

enableProdMode();

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {}),
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/angular-app/'}],
  declarations: [
    AngularApp,
    Subroute1,
    Subroute2,
  ],
  bootstrap: [AngularApp]
})
export default class MainModule {
}