import { MtrPersecToKmPerhrPipe } from './mtr-persec-to-km-perhr.pipe';

describe('MtrPersecToKmPerhrPipe', () => {
  const pipe = new MtrPersecToKmPerhrPipe();
  it('create an instance', () => {
    const pipe = new MtrPersecToKmPerhrPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return value in km/h when a value is given in mtr/sec', () => {
    expect(pipe.transform(5)).toBe(18);
  });
});
