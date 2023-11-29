import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss'],
})
export class GeneralInfoComponent implements OnInit {
  public items: MenuItem[] | undefined;
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      sprint: ['sprint 23-19', []],
      options: ['', []],
    });
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Backlog',
        disabled: false,
      },
      {
        label: 'Pending',
        disabled: false,
      },
      {
        label: 'Assigned',
        disabled: false,
      },
      {
        label: 'Analysis',
        disabled: false,
      },
      {
        label: 'Work in progress',
        disabled: false,
      },
      {
        label: 'Review PO',
        disabled: false,
      },
      {
        label: 'Completed',
        disabled: false,
      },
    ];
  }
}
