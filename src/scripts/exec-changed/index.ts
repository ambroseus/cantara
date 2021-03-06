import path from 'path';
import execCmd from '../../util/exec';
import { existsSync } from 'fs';
import { readFileAsJSON } from '../../util/fs';
import { getFilesChangedSinceCommit } from './util';
import getGlobalConfig from '../../cantara-config/global-config';

/** Returns a list of applications
 * which changed since the last commit
 * found in '.cantara/ci.json'
 */
async function getChangedApps() {
  const { projectDir, dotCantaraDir, allApps } = getGlobalConfig();

  // Get commit from .cantara/ci.json file
  const cantaraCiFilePath = path.join(dotCantaraDir, 'ci.json');
  let fromCommit = 'HEAD';
  if (existsSync(cantaraCiFilePath)) {
    const { fromCommit: fromCommitVal } = readFileAsJSON(cantaraCiFilePath);
    if (fromCommitVal) {
      fromCommit = fromCommitVal;
    }
  }

  // Identify changes between this and latest commit
  const changedFiles = await getFilesChangedSinceCommit({
    fromCommit,
    repoDir: projectDir,
  });

  const changedAppNames = changedFiles
    .map(changedFile => {
      const srcIndex = changedFile.indexOf('src');
      const rootPath = changedFile.slice(0, srcIndex);
      const name = path.basename(rootPath);
      // Only include apps that exist
      const foundApp = allApps.find(app => app.name === name);
      if (!foundApp) return false;
      return name;
    })
    .filter(Boolean) as string[];

  return changedAppNames;
}

interface ExecUserCmdForChangedAppParams {
  appnames: string[];
}

/**
 * Executes an arbitrary command
 * if one of the the specified
 * applications changed
 */
export default async function execCmdIfAppsChanged({
  appnames,
}: ExecUserCmdForChangedAppParams) {
  const { projectDir, additionalCliOptions: userCmd } = getGlobalConfig();

  const changedAppNames = await getChangedApps();
  const didChange = !!appnames.find(appname =>
    changedAppNames.includes(appname),
  );
  if (didChange) {
    await execCmd(userCmd, {
      workingDirectory: projectDir,
      redirectIo: true,
    });
  }
}
