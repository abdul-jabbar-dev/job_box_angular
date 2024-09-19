import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('container') container: ElementRef | undefined;
  listOfContainer: string[] = ['/dashboard'];
  routerSubscription: Subscription | undefined;
  isNavView = false;
  constructor(public router: Router) {}

  ngOnInit(): void {
    this.updateContainerClass(this.router.url);
  }

  ngAfterViewInit(): void {
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.updateContainerClass(event.urlAfterRedirects || event.url);
      });
  }

  updateContainerClass(path: string): void {
    if (this.container) {
      if (
        !this.listOfContainer.find((d) => d === path || path.startsWith(d))
      ) {
        this.isNavView = false;
      } else {
        this.isNavView = true;
      }
    }
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
