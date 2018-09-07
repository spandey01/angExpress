import { ECoreComponentsModule } from './e-core-components.module';

describe('ECoreComponentsModule', () => {
  let eCoreComponentsModule: ECoreComponentsModule;

  beforeEach(() => {
    eCoreComponentsModule = new ECoreComponentsModule();
  });

  it('should create an instance', () => {
    expect(eCoreComponentsModule).toBeTruthy();
  });
});
