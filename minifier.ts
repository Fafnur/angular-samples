import { minify } from 'html-minifier';
import { existsSync, readdirSync, lstatSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

function fromDir(startPath: string, filter: string): string[] {
  if (!existsSync(startPath)) {
    console.warn('no dir ', startPath);
    return [];
  }
  const founded = [];
  const files = readdirSync(startPath);
  for (const file of files) {
    const filename = join(startPath, file);
    const stat = lstatSync(filename);
    if (stat.isDirectory()) {
      const foundedIn = fromDir(filename, filter);
      founded.push(...foundedIn);
    } else if (filename.indexOf(filter) >= 0) {
      founded.push(filename);
    }
  }

  return founded;
}

const files = fromDir(`dist/apps/${process.env.PROJECT ?? ''}`, '.html');

for (const filePath of files) {
  const fileContent = readFileSync(filePath, 'utf8');
  const minifiedValue = minify(fileContent.toString(), {
    removeComments: true,
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
  });

  writeFileSync(filePath, minifiedValue);
}

console.log(files);
