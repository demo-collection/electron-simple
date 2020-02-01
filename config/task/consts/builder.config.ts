/**
 * electron-builder configuration
 * https://www.electron.build/configuration/configuration
 */

import * as path from 'path';
import { Configuration, CliOptions } from 'electron-builder';

const ICON_ICO = path.resolve(__dirname, '../../../assets/app-icon/icon/icon.ico');
const ICON_ICNS = path.resolve(__dirname, '../../../assets/app-icon/icon/icon.icns');

const config: Configuration = {
  productName: 'electron-simple',
  buildVersion: '0.0.1',
  appId: 'yanle001',
  files: ['build', 'assets', 'package.json'],
  asar: false,
  directories: {
    buildResources: 'assets',
    output: 'dist',
  },
  win: {
    icon: ICON_ICO,
    target: ['nsis', 'msi'],
  },
  mac: {
    icon: ICON_ICNS,
  },
  dmg: {
    icon: ICON_ICNS,
    contents: [
      { x: 130, y: 220 },
      { x: 410, y: 220, type: 'link', path: '/Applications' },
    ],
  },
  linux: {
    icon: ICON_ICNS,
    target: ['deb', 'rpm', 'AppImage'],
    category: 'Development',
  },
};

const packageConfig: CliOptions = {
  config,
};

export default packageConfig;
