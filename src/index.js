const core = require('@actions/core');
const path = require('path');

const src = path.join(__dirname, '..');

async function run() {
  core.startGroup('Get Input value');
  const license_path = path.join(src, core.getInput('path'));
  core.info(`license_path: ${license_path}`);
  const stringInput = core.getInput('stringInput');
  core.info(`stringInput: ${stringInput}`);
  core.info(`type of stringInput: ${typeof stringInput}`);
  const booleanInput = core.getInput('booleanInput');
  core.info(`booleanInput: ${booleanInput}`);
  core.info(`type of booleanInput: ${typeof booleanInput}`);
  const orderMapInput = core.getInput('orderMapInput');
  core.info(`orderMapInput: ${orderMapInput}`);
  core.info(`type of orderMapInput: ${typeof orderMapInput}`);
  const mapInput = core.getInput('mapInput');
  core.info(`mapInput: ${mapInput}`);
  core.info(`type of mapInput: ${typeof mapInput}`);
  core.endGroup();
}

run();
