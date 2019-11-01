import { Component } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homeautomationwebUI';
  isLoading: boolean = false;

  constructor(
    private router: Router
  ) {
    this.handleLoadingSpinner();
  }

  handleLoadingSpinner() {
    this.router.events.subscribe((routerEvent : Event) => {
      this.checkEvent(routerEvent);
    })
  }

  checkEvent(routerEvent : Event) : void {
    if (routerEvent instanceof NavigationStart) {
      this.isLoading = true;
    }
    else if (routerEvent instanceof NavigationEnd ||
             routerEvent instanceof NavigationCancel ||
             routerEvent instanceof NavigationError) {
      this.isLoading = false;
    }
  }
}
