import { writeFileSync, readdirSync } from 'fs';

const folderWithIcons = '../svg';

const fileList: [string, string][] = [];

const capitalizeFirstLetter = (value: string): string => {
  return String(value).charAt(0).toUpperCase() + String(value).slice(1);
};

const getImportString = (componentName: string, fileName: string): string => {
  return `import ${componentName} from './${fileName}';`;
};

const getComponentName = (fileName: string): string => {
  return `${fileName.replace('.svg', '').split('_').map(capitalizeFirstLetter).join('')}Icon`;
};

readdirSync(folderWithIcons).forEach(fileName => {
  if (fileName.endsWith('.svg')) {
    const componentName = getComponentName(fileName);

    fileList.push([componentName, fileName]);
  }
});

const content = fileList.reduce((acc, file) => {
  return `${acc}${getImportString(file[0], file[1])}\n`;
}, '');
const exportContent = `${fileList.reduce((acc, file) => {
  return `${acc}${file[0]}, `;
}, `export { `)} };`;

writeFileSync('../svg/index.ts', `${content}\n\n${exportContent}`);
