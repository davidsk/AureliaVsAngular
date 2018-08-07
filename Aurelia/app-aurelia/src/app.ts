import { RouterConfiguration, Router } from 'aurelia-router';

export class App {
  message = 'Hello World!';
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "App-Aurelia";
    config.map([
      {route: "", name: "user", title: "User", moduleId: "components/user", nav: true},
      {route: ["about"], name: "about", title: "About", moduleId: "components/about", nav: true}
    ]);
    this.router = router;
  }
}
