import * as fs from 'fs';

// ? only-components.ts에서 제외할 컴포넌트를 추가해주세요.
const ONLY_COMPONENTS_EXPORT_IGNORE_LIST = ['logo', 'toast', 'popover'];

// ? 여러 개의 컴포넌트를 export하는 경우 추가해주세요.
const MANY_COMPONENTS_EXPORT_LIST = [
  {
    name: 'select',
    components: [
      'Select',
      'SelectTrigger',
      'SelectValue',
      'SelectContent',
      'SelectItem',
    ],
  },
  {
    name: 'table',
    components: [
      'Table',
      'TableHeader',
      'TableHead',
      'TableBody',
      'TableRow',
      'TableCell',
      'TableFooter',
    ],
  },
];

function convertComponentName(dirName) {
  if (!dirName) throw new Error('Directory name is required');
  return dirName.charAt(0).toUpperCase() + dirName.slice(1);
}

function getComponentDirs() {
  return fs
    .readdirSync('./src')
    .filter((dir) => fs.statSync(`./src/${dir}`).isDirectory());
}

function extractComponentName(dirName) {
  const componentFilePath = `./src/${dirName}/${dirName}.tsx`;

  if (!fs.existsSync(componentFilePath)) {
    return convertComponentName(dirName);
  }

  const exceptionComponent = MANY_COMPONENTS_EXPORT_LIST.find(
    (component) => component.name === dirName
  );
  if (exceptionComponent) {
    return exceptionComponent.components.join(', ');
  }

  const content = fs.readFileSync(componentFilePath, 'utf-8');

  // export { ComponentName, ... } 패턴에서 첫 번째 컴포넌트 이름 추출
  const exportMatch = content.match(/export\s*\{\s*([A-Z][a-zA-Z0-9]*)/);

  if (exportMatch && exportMatch[1]) {
    return exportMatch[1];
  }

  // 찾지 못하면 기본 변환 사용
  return convertComponentName(dirName);
}

function generateExportsAll() {
  const componentDirs = getComponentDirs();
  const exports =
    componentDirs.map((dir) => `export * from './${dir}';`).join('\n') + '\n'; // add EOL

  fs.writeFileSync('./src/index.ts', exports);
}

function generateExportsOnlyComponents() {
  const componentDirs = getComponentDirs().filter(
    (dir) => !ONLY_COMPONENTS_EXPORT_IGNORE_LIST.includes(dir)
  );

  const exportsOnlyComponents =
    componentDirs
      .map((dir) => `export { ${extractComponentName(dir)} } from './${dir}';`)
      .join('\n') + '\n'; // add EOL

  fs.writeFileSync('./src/only-components.ts', exportsOnlyComponents);
}

generateExportsOnlyComponents();
generateExportsAll();
