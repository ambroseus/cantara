import { CantaraApplicationType } from '../util/types';

export interface CantaraCommand<TParameters = any> {
  name: string;
  description: string;
  execute: (
    params: TParameters & { projectDir: string },
  ) => Promise<void> | void;
  /**
   * Additional yargs params
   * (positional)
   */
  parameters?: {
    name: string;
    description: string;
    /**
     * Limit possible value to a predefined
     * set of values. If this is set, and
     * the command is invoked without parameters,
     * an autocomplete prompt is shown
     */
    choices?: string[];
  }[];
  configuration: {
    /**
     * If set to true, the second parameter
     * of this command is the name of an
     * application. If no appname is provided,
     * an autocomplete prompt shows.
     * If true, and an existing app was selected,
     * Cantara's runtime configuration is loaded.
     */
    needsActiveApp?: boolean;
    /**
     * App types this command can
     * be executed with.
     */
    appTypes?: CantaraApplicationType[];
    /**
     * Some commands like 'init'
     * don't need the global configuration
     * to be present. IF that's the case,
     * set this value to false. It
     * defaults to true
     */
    needsGlobalConfig?: boolean;
    /**
     * If defined, and this command is run
     * without additional CLI params,
     * a prompt is shown so that the user
     * can enter additional CLI params
     */
    retrieveAdditionalCliParams?: {
      message: string;
    };
  };
}

const devCommand: CantaraCommand = {
  name: 'dev',
  description: 'Start the development server',
  configuration: {
    needsActiveApp: true,
    appTypes: ['node', 'react', 'serverless'],
  },
  execute: async () => {
    const { default: startDevelopmentServer } = await import('../scripts/dev');
    await startDevelopmentServer();
  },
};

const buildCommand: CantaraCommand = {
  name: 'build',
  description: 'Create a production build of a package/app',
  configuration: {
    needsActiveApp: true,
    appTypes: ['node', 'react', 'react-component', 'js-package'],
  },
  execute: async () => {
    const { default: buildActiveApp } = await import('../scripts/build');
    await buildActiveApp();
  },
};

const testCommand: CantaraCommand = {
  name: 'test',
  description: 'Run tests for an application/package',
  configuration: {
    needsActiveApp: true,
  },
  execute: async () => {
    const { default: executeTests } = await import('../scripts/test');
    await executeTests();
  },
};

const deployCommand: CantaraCommand = {
  name: 'deploy',
  description: 'Deploy a serverless endpoint',
  configuration: {
    needsActiveApp: true,
    appTypes: ['serverless'],
  },
  execute: async () => {
    const { default: deployActiveApp } = await import('../scripts/deploy');
    await deployActiveApp();
  },
};

const runCommand: CantaraCommand = {
  name: 'run',
  parameters: [
    { name: 'commands', description: 'The command(s) you want to execute.' },
  ],
  description: `Run an arbitrary command for the specified app/package. For NPM commands, you don't need to type "npm". Example: "ctra run my-api install express"`,
  configuration: {
    needsActiveApp: true,
    retrieveAdditionalCliParams: {
      message: 'Enter the command you want to execute',
    },
  },
  execute: async () => {
    const { default: executeArbitraryCmdWithinApp } = await import(
      '../scripts/arbitrary'
    );
    await executeArbitraryCmdWithinApp();
  },
};

const execChangedCommand: CantaraCommand<{ appnames: string }> = {
  name: 'exec-changed',
  parameters: [
    {
      name: 'appnames',
      description:
        'A comma separated list of apps/packages, e.g. "my-api,my-react-app,nice-package"',
    },
    {
      name: 'commands',
      description:
        'The command(s) you want to execute in case one of the apps/packages changed.',
    },
  ],
  description: `Run commands for apps/packages if they changed according to the commit history. Pass in a comma separated list of apps. Useful for CI. Example: ctra exec-changed my-api ./deploy.sh`,
  configuration: {
    needsGlobalConfig: true,
  },
  execute: async ({ appnames: appnamesParam }) => {
    const { default: execCmdIfAppsChanged } = await import(
      '../scripts/exec-changed'
    );
    const appnames = appnamesParam.split(',');
    return execCmdIfAppsChanged({ appnames });
  },
};

const initCommand: CantaraCommand<{ path: string; template?: string }> = {
  name: 'init',
  description: 'Initialize a new Cantara project.',
  parameters: [
    {
      name: 'path',
      description: 'The directory where you want to create the new project.',
    },
    {
      name: 'template',
      description:
        'The name of the starter template. You can also specify a link to a git repository.',
      choices: ['cantara-simple-starter'],
    },
  ],
  configuration: {
    needsActiveApp: false,
    needsGlobalConfig: false,
  },
  execute: async ({ path: userPath, template, projectDir }) => {
    const { default: initializeNewProject } = await import('../scripts/init');
    const templateToUse = template ? template : 'cantara-simple-starter';
    return initializeNewProject({
      newFolderPath: userPath,
      templateName: templateToUse,
      cwd: projectDir,
    });
  },
};

const newCommand: CantaraCommand<{ type: string; name: string }> = {
  name: 'new',
  description: 'Create a new app/package',
  parameters: [
    {
      name: 'type',
      description: 'The type of package/app you would to create',
      choices: ['react', 'node', 'js-package', 'react-component', 'serverless'],
    },
    { name: 'name', description: 'Name of the entity you want to create.' },
  ],
  configuration: {
    needsActiveApp: false,
  },
  execute: async ({ name, type }) => {
    const { default: createNewAppOrPackage } = await import('../scripts/new');
    return createNewAppOrPackage({ type: type as any, name });
  },
};

const e2eCommand: CantaraCommand = {
  name: 'e2e',
  description: `Execute application's E2E tests`,
  configuration: {
    needsActiveApp: false,
  },
  execute: async () => {
    const { default: startEndToEndTests } = await import('../scripts/e2e');
    return startEndToEndTests();
  },
};

const onPrePushCommand: CantaraCommand = {
  name: 'on-pre-push',
  description: `Used internally. Executed every time before "git push" is executed.`,
  configuration: {
    needsActiveApp: false,
  },
  execute: async () => {
    const { default: onPrePush } = await import('../scripts/on-pre-push');
    return onPrePush();
  },
};

const allCliCommands: CantaraCommand[] = [
  initCommand,
  devCommand,
  testCommand,
  buildCommand,
  deployCommand,
  runCommand,
  newCommand,
  execChangedCommand,
  e2eCommand,
  onPrePushCommand,
];

export default allCliCommands;
