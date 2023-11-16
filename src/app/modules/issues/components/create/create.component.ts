import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  public form: FormGroup;
  public products: any[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      product: ['', []],
      environment: ['', []],
      tittle: ['', []],
      description: ['', []],
      impact: ['', []],
    });
  }
}
