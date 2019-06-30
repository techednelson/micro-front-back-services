import * as singleSpa from 'single-spa';

singleSpa.registerApplication('angular-app', () => import ('../angular-app/angular-app.js'), pathPrefix('/angular-app'));
singleSpa.registerApplication('react-app', () => import ('../react-app/react-app.js'), pathPrefix('/react-app'));

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}