import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog-create-issue',
  templateUrl: './dialog-create-issue.component.html',
  styleUrls: ['./dialog-create-issue.component.scss'],
})
export class DialogCreateIssueComponent {
  @Input() visible: boolean = false;
  public form: FormGroup;
  public products: any[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      products: ['', []],
      environment: ['', []],
      tittle: ['', []],
      description: ['', []],
      impact: ['', []],
    });
  }

  showDialog() {
    this.visible = true;
  }
}
