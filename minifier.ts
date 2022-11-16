import { readFileSync, writeFileSync } from 'fs';
import { minify } from 'html-minifier';

const files = [
  'dist/apps/redux/akita/index.html',
  'dist/apps/redux/dashboard/index.html',
  'dist/apps/redux/ngrx/index.html',
  'dist/apps/redux/ngxs/index.html',
];

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
