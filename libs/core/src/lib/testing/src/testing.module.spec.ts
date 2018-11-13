import { OrchestratorTestingModule } from './testing.module';
import { TestBed, async } from '@angular/core/testing';

describe('OrchestratorTestingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OrchestratorTestingModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OrchestratorTestingModule).toBeDefined();
  });
});
