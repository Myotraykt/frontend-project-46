import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('Testing the function genDiff', () => {
  test('fileStylish', () => {
    expect(gendiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(readFile('expectedFileStylish.txt'));
  });
  test('format Stylish', () => {
    expect(gendiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'stylish')).toEqual(readFile('expectedFileStylish.txt'));
  });
});