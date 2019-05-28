import { KelvinToCelciusPipe } from './kelvin-to-celcius.pipe';

describe('KelvinToCelciusPipe', () => {
  const pipe = new KelvinToCelciusPipe();
  it('create an instance', () => {
    const pipe = new KelvinToCelciusPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return value in celcius when a value is given in Kelven', () => {
    expect(pipe.transform(290)).toBe(17);
  });
});
