import fs from 'fs';
import path from 'path';

const componentsDir = path.resolve('src/components/ui');
const indexFile = path.resolve('src/index.ts');

const files = fs.readdirSync(componentsDir)
  .filter(file => file.endsWith('.tsx'));

const exportLines = files.map(file => {
  const name = file.replace('.tsx', '');
  return `export * from './components/ui/${name}';`;
});

const content = `import './index.css';\n\n${exportLines.join('\n')}\n`;

fs.writeFileSync(indexFile, content);
console.log('Generated exports in src/index.ts:', exportLines); 