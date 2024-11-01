import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('Testing the function genDiff', () => {
  const tests = [
    ['fileStylish', 'expectedFileStylish.txt', undefined],
    ['format Stylish', 'expectedFileStylish.txt', 'stylish'],
    ['format Plain', 'expectedFilePlain.txt', 'plain'],
    ['format JSON', 'expectedFileJson.txt', 'json'],
  ];

  test.each(tests)('%s', (testName, expectedFile, format) => {
    const filepath1 = path.resolve(getFixturePath('file1.json'));
    const filepath2 = path.resolve(getFixturePath('file2.json'));
    expect(gendiff(filepath1, filepath2, format)).toEqual(readFile(expectedFile));
  });
});
