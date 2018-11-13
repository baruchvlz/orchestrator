import { async, TestBed } from '@angular/core/testing';
import { OrchestratorLayoutModule } from './layout.module';

describe('OrchestratorLayoutModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OrchestratorLayoutModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OrchestratorLayoutModule).toBeDefined();
  });
});
