import path from 'path';
import genDiff from '../src/index.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '../__fixtures__', filename);

test('genDiff', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');

  const expectedOutput = `{
- follow: false
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`;

  expect(genDiff(filepath1, filepath2)).toEqual(expectedOutput);
});