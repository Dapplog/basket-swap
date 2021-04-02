const Env = process.env.PREACT_APP_ENV || 'development';
export const isProd = Env === 'production';

let secrets = {};
if (!isProd) {
  secrets = require('../../../../secrets.yml');
}

const config = {
  ['development']: {
    DFUSE_API_KEY: secrets?.['DFUSE_API_KEY'],
  },
  ['production']: {
    DFUSE_API_KEY: process.env.DFUSE_API_KEY,
  },
};

export default config[Env];
