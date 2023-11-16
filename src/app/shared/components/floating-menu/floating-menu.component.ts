import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-floating-menu',
  templateUrl: './floating-menu.component.html',
  styleUrls: ['./floating-menu.component.scss'],
})
export class FloatingMenuComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: 'home',
      },
      {
        label: 'Issue',
        items: [
          {
            label: 'Create issue',
            routerLink: '/home/issues/create',
          },
          {
            label: 'Edit issue',
            routerLink: '/home/issues/edit',
          },
          {
            label: 'Search issue',
            routerLink: '/home/issues/search',
          },
        ],
      },
      {
        label: 'Findings',
        items: [
          {
            label: 'Create findings',
            routerLink: '/home/findings/create',
          },
          {
            label: 'Edit findings',
            routerLink: '/home/findings/edit',
          },
          {
            label: 'Search findings',
            routerLink: '/home/findings/search',
          },
        ],
      },
      {
        label: 'Change requests',
        items: [
          {
            label: 'Create change request',
          },
          {
            label: 'Edit change request',
          },
          {
            label: 'Search change request',
          },
        ],
      },
    ];
  }
}
