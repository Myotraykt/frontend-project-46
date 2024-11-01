import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const testData = [
  ['file1.json', 'file2.json', 'stylish', 'expectedFileStylish.txt'],
  ['file1.yaml', 'file2.yaml', 'stylish', 'expectedFileStylish.txt'],
  ['file1.yml', 'file2.yml', 'plain', 'expectedFilePlain.txt'],
  ['file1.json', 'file2.yaml', 'plain', 'expectedFilePlain.txt'],
  ['file1.json', 'file2.yml', 'json', 'expectedFileJson.txt'],
  ['file1.yaml', 'file2.yml', 'json', 'expectedFileJson.txt'],
];

describe.each(testData)('Comparison check:', (fileName1, fileName2, format, expectedResult) => {
  test(`correct diff for ${fileName1} === ${fileName2} in ${format}`, () => {
    const file1 = getFixturePath(fileName1);
    const file2 = getFixturePath(fileName2);

    const received = gendiff(file1, file2, format);
    const expected = readFile(expectedResult);

    expect(received).toEqual(expected);
  });
});

test('Comparison check default format', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');

  const received = gendiff(file1, file2);
  const expected = readFile('expectedFileStylish.txt');

  expect(received).toEqual(expected);
});
