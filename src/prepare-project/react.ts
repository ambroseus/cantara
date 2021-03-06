import path from 'path';
import { copyFileSync, existsSync, mkdirSync } from 'fs';

import { CantaraApplication } from '../util/types';
import { createOrUpdatePackageJSON } from './util/npm';
import { createReactJestConfig } from './util/jest';
import { createLocalAppTsConfig } from './util/typescript';
import getGlobalConfig from '../cantara-config/global-config';

/** Prepares React App Folder */
export default async function prepareReactApps(app: CantaraApplication) {
  const globalCantaraConfig = getGlobalConfig();
  // Copy index.html to asssets folder if not already there
  const defaultIndexHtmlTemplatePath = path.join(
    globalCantaraConfig.internalPaths.static,
    'default-index.html',
  );
  if (!app.paths.assets) return;
  if (!existsSync(app.paths.assets)) {
    mkdirSync(app.paths.assets);
  }
  const indexHtmlDestinationPath = path.join(app.paths.assets, 'index.html');
  if (!existsSync(indexHtmlDestinationPath)) {
    copyFileSync(defaultIndexHtmlTemplatePath, indexHtmlDestinationPath);
  }

  // Install/update dependencies
  await createOrUpdatePackageJSON({
    expectedDependencies: globalCantaraConfig.dependencies.react,
    expectedDevDependencies: {
      ...globalCantaraConfig.dependencies.testing,
      ...globalCantaraConfig.dependencies.typescript,
    },
    rootDir: app.paths.root,
  });

  // Create react Jest config file and copy to current project
  createReactJestConfig(app);

  // Create local tsconfig which extends from global one.
  // Needed to correctly generate types
  createLocalAppTsConfig({ app, indexFileName: 'index.tsx' });
}
