const core = require('@actions/core');
const path = require('path');
const yaml = require('js-yaml');

const src = path.join(__dirname, '..');

async function run() {
  core.startGroup('Get Input value');
  const license_path = path.join(src, core.getInput('path'));
  core.info(`license_path: ${license_path}`);
  core.startGroup('Test nested groups');
  const stringInput = yaml.load(core.getInput('stringInput'));
  core.info(`stringInput: ${stringInput}`);
  core.info(`type of stringInput: ${typeof stringInput}`);
  core.endGroup();
  const booleanInput = yaml.load(core.getInput('booleanInput'));
  core.info(`booleanInput: ${booleanInput}`);
  core.info(`type of booleanInput: ${typeof booleanInput}`);
  const mapString = yaml.load(core.getInput('mapString'));
  core.info(`mapString: ${mapString}`);
  core.info(`mapString: ${JSON.stringify(mapString)}`);
  core.info(`type of mapString: ${typeof mapString}`);
  core.endGroup();
}

run();
