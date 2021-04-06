import path from 'path';

export const getDevelopPath = (): string => path.join(__dirname, '..', '..', '..', 'build', 'web-development');
export const getProductionPath = (): string => path.join(__dirname, '..', '..', '..', 'public');

export function getFrontEndEntryPoint(): string {
  switch (process.env.NODE_ENV) {
    case 'production':
      return getDevelopPath();
    default:
      return getProductionPath();
  }
}
