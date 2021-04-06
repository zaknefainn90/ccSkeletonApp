import { getDevelopPath, getProductionPath } from '../utils';

describe('@components/home/utils', () => {

  it('getDevelopPath should return valid development path', () => {
    const path = getDevelopPath();
    const regexPath = /(build)|(web-development)/;

    expect(path).toMatch(regexPath);
  });

  it('getProductionPath should return valid production path', () => {
    const path = getProductionPath();
    const regexPath = /(gamerello)|(public)/;

    expect(path).toMatch(regexPath);
  });
});