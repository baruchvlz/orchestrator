import { Component } from '@angular/core';
import { DynamicBaseComponent } from './dynamic-base.component';

@Component({
  selector: 'orc-dyn1-comp',
  template: `<orc-render-item *ngFor="let item of items" [item]="item"></orc-render-item>`,
})
export class Dynamic1Component extends DynamicBaseComponent {}
