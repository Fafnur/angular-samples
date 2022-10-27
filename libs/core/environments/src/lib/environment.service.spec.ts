import { ENVIRONMENTS_DEFAULT } from './environment.interface';
import { EnvironmentService } from './environment.service';

describe('EnvironmentService', () => {
  let service: EnvironmentService;

  beforeEach(() => {
    service = new EnvironmentService(null);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should return getEnvironments', () => {
    expect(service.getEnvironments()).toEqual(ENVIRONMENTS_DEFAULT);
  });
});
