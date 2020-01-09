import webpack from 'webpack';

import getGlobalConfig from '../../config';
import createNodeWebpackConfig from './webpack/node.config';

export function startNodeAppDevelopmentServer() {
  const {
    runtime: {
      currentCommand: { app: activeApp },
      projectDir,
    },
  } = getGlobalConfig();
  const webpackConfig = createNodeWebpackConfig({
    app: activeApp,
    projectDir,
  });

  const compiler = webpack(webpackConfig);
  compiler.watch({}, (err, stats) => {
    if (err) {
      throw new Error('Build error.');
    }
  });
}
