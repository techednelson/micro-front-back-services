import {Component} from '@angular/core';

@Component({
  selector: 'angular-app',
  template: `
    <div style="margin-top: 100px;">
      This was rendered by angular-app which is written in Angular
    </div>
    <a [routerLink]="['/subroute1']" routerLinkActive="active">Angular route 1</a>
    <a [routerLink]="['/subroute2']" routerLinkActive="active">Angular route 2</a>
    <router-outlet></router-outlet>
  `,
})
export default class AngularAppComponent {
}