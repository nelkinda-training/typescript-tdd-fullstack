import { runCucumber, loadConfiguration } from '@cucumber/cucumber/api';

export async function runCucumberFeatures(): Promise<number> {
  const { runConfiguration } = await loadConfiguration({
    provided: {
      paths: ['features'],
      requireModule: ['ts-node/register'],
      require: ['features/step_definitions/**/*.ts'],
      format: ['progress-bar'],
    },
  });

  const { success } = await runCucumber(runConfiguration);
  return success ? 0 : 1;
}
