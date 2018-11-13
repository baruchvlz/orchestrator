import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrchestratorCoreModule } from '@orchestrator/core';
import {
  DynamicBaseComponent,
  Dynamic1Component,
  Dynamic2Component,
} from './lib/dynamic-components';

@NgModule({
  imports: [
    CommonModule,
    OrchestratorCoreModule.withComponents([Dynamic1Component, Dynamic2Component]),
  ],
  exports: [DynamicBaseComponent, Dynamic1Component, Dynamic2Component],
  declarations: [DynamicBaseComponent, Dynamic1Component, Dynamic2Component],
})
export class OrchestratorTestingModule {}
