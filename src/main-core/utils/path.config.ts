import * as path from 'path';

const NODE_ENV = process.env.NODE_ENV;

export const pathConfig =
  NODE_ENV === 'product' ? `file://${path.join(__dirname, 'build/index.html')}` : 'index.html';
