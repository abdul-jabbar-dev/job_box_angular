import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements AfterViewInit, OnInit {
  listSideBar: { title: string; icon: string; src: string; active: boolean }[];
  routerSubscription: Subscription | undefined;
  path: string = '';

  constructor(public router: Router) {
    this.listSideBar = [
      {
        icon: 'dashboard',
        title: 'Dashboard',
        active: false,
        src: '/dashboard',
      },
      {
        icon: 'factory',
        title: 'Company Profile',
        active: false,
        src: '/dashboard/company-profile',
      },
      {
        icon: 'work',
        title: 'Post a New Job',
        active: false,
        src: '/dashboard/post-job',
      },
      {
        icon: 'view_list',
        title: 'All Applicants',
        active: false,
        src: '/dashboard/applicants',
      },
      {
        icon: 'message',
        title: 'Messages',
        active: false,
        src: '/dashboard/messages',
      },
      {
        icon: 'settings',
        title: 'Settings',
        active: false,
        src: '/dashboard/settings',
      },
    ];
  }

  ngOnInit(): void {
    this.path = this.router.url;
    this.setActiveLink(this.path);
  }

  ngAfterViewInit(): void {
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.path = event.urlAfterRedirects || event.url;
        this.setActiveLink(this.path);
      });
  }

  setActiveLink(url: string) {
    this.listSideBar.forEach((item) => {
      item.active = item.src === url;
    });
  }
}
