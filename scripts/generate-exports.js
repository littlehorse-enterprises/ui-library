import fs from 'fs';
import path from 'path';

// Get all component directories
const components = fs
  .readdirSync(path.resolve(process.cwd(), "src"))
  .filter(dir => {
    const stats = fs.statSync(path.resolve(process.cwd(), "src", dir));
    return stats.isDirectory() && fs.existsSync(path.resolve(process.cwd(), "src", dir, "index.tsx"));
  });

// Generate exports object
const exports = {
  ".": {
    "types": "./dist/index.d.ts",
    "import": "./dist/index.js",
    "require": "./dist/index.js"
  },
  "./ui.css": "./dist/ui.css"
};

// Add each component to exports
components.forEach(component => {
  exports[`./${component}`] = {
    "types": `./dist/${component}/index.d.ts`,
    "import": `./dist/${component}/index.js`,
    "require": `./dist/${component}/index.js`
  };
});

// Read package.json
const packageJson = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "package.json"), 'utf8'));

// Update exports field
packageJson.exports = exports;

// Write back to package.json
fs.writeFileSync(
  path.resolve(process.cwd(), "package.json"),
  JSON.stringify(packageJson, null, 2) + '\n'
); 