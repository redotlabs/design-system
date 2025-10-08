import * as fs from 'fs';

function convertComponentName(dirName) {
  if (!dirName) throw new Error('Directory name is required');
  return dirName.charAt(0).toUpperCase() + dirName.slice(1);
}

function getComponentDirs() {
  return fs.readdirSync('./src').filter((dir) => fs.statSync(`./src/${dir}`).isDirectory());
}

function generateExportsAll() {
  const componentDirs = getComponentDirs();
  const exports = componentDirs
    .map((dir) => `export * from './${dir}';`)
    .join('\n') + '\n'; // add EOL

  fs.writeFileSync('./src/index.ts', exports);
}

function generateExportsOnlyComponents() {
  const componentDirs = getComponentDirs();

  const exportsOnlyComponents = componentDirs
    .map((dir) => `export { ${convertComponentName(dir)} } from './${dir}';`)
    .join('\n') + '\n'; // add EOL

  fs.writeFileSync('./src/only-components.ts', exportsOnlyComponents);
}

generateExportsOnlyComponents();
generateExportsAll();
