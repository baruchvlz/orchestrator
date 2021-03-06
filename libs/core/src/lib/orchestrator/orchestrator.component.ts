import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from '@angular/core';
import { ComponentRef } from '@angular/core/src/render3';
import { combineLatest, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { OrchestratorConfigItem } from '../types';

@Component({
  selector: 'orc-orchestrator',
  templateUrl: './orchestrator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrchestratorComponent implements OnInit {
  @Input() config: OrchestratorConfigItem<any>;

  private compCreated$ = new Subject<ComponentRef<any>>();
  private childCompsCreated$ = new Subject<ComponentRef<any>[]>();

  @Output()
  componentsCreated = combineLatest(this.compCreated$, this.childCompsCreated$).pipe(
    map(([comp, comps]) => [comp, ...comps]),
  );

  constructor() {}

  ngOnInit() {}

  compCreated(compRef: ComponentRef<any>) {
    this.compCreated$.next(compRef);
  }

  childCompsCreated(compRefs: ComponentRef<any>[]) {
    this.childCompsCreated$.next(compRefs);
  }
}
