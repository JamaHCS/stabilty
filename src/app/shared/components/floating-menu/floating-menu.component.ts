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
        label: 'Issue',
        items: [
          {
            label: 'Create issue',
          },
          {
            label: 'Edit issue',
          },
          {
            label: 'Search issue',
          },
        ],
      },
      {
        label: 'Findings',
        items: [
          {
            label: 'Create findings',
          },
          {
            label: 'Edit findings',
          },
          {
            label: 'Search findings',
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
