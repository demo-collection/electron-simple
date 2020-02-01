import { build as electronBuilder } from 'electron-builder';
import builderConfig from './consts/builder.config';

electronBuilder(builderConfig)
  .then(res => {
    console.log(`[Released] : ${res}`);
  })
  .catch(err => {
    throw new Error(err);
  })
  .finally(() => process.exit());
