import { StarPipe } from './pipes/star.pipe';

describe('StarPipe', () => {
  it('create an instance', () => {
    const pipe = new StarPipe();
    expect(pipe).toBeTruthy();
  });
});
