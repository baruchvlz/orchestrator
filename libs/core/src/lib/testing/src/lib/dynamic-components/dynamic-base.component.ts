import { Component, Input } from '@angular/core';

import { OrchestratorDynamicComponent } from '@orchestrator/core';

@Component({ selector: 'orc-dyn-base', template: `` })
export class DynamicBaseComponent implements OrchestratorDynamicComponent {
  @Input() items;
  @Input() config;
}
