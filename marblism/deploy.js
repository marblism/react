'use strict';
const {join} = require('path');
const {exec} = require('child-process-promise');
const {existsSync, readFileSync, writeFileSync} = require('fs');
const {readJson, writeJson} = require('fs-extra');

const pathRoot = join(__dirname, '..');

const getPathAbsolute = (pathRelative) => {
  return join(pathRoot, pathRelative)
}

const runCommand = async (command, options) => {
  const {stdout} = await exec(command, options);

  return stdout.trim();
};

const getPackageJson = async () => {
  const pathJson = getPathAbsolute('/packages/react-devtools-inline/package.json')
  
  const values = await readJson(pathJson)

  return values

}
const updatePackageJson = async (values) => {
  const pathJson = getPathAbsolute('/packages/react-devtools-inline/package.json')

  const valuesBefore = await readJson(pathJson)

  const valuesAfter = {...valuesBefore, ...values}

  await writeJson(pathJson, valuesAfter, {spaces: 2});
}

const increaseVersion = (version) => {
  let minor = +version.split('.').slice(-1)[0]

  minor += 1

  return `${version.split('.').slice(0, -1).join('.')}.${minor}`
}

const build = () => {
  return runCommand(`yarn build`, { cwd: getPathAbsolute('/packages/react-devtools-inline') })
}

const publish = () => {
  return runCommand(`npm publish --access restricted`, { cwd: getPathAbsolute('/packages/react-devtools-inline') })
}

const main = async () => {

  // const packageJsonBackup = await getPackageJson()

  // const version = increaseVersion(packageJsonBackup.version)

  // await updatePackageJson({ name: `@marblism/${packageJsonBackup.name}`, version, repository: {} })

  await build();

  // await publish()

  // await updatePackageJson({ name: packageJsonBackup.name, version: packageJsonBackup.version })
}

main()
