#!/usr/bin/env node
import { Command } from 'commander';
import parseJsonFile from '../src/parser.js';
import _ from 'lodash';

const program = new Command();

const genDiff = (filepath1, filepath2) => {
  const data1 = parseJsonFile(filepath1);
  const data2 = parseJsonFile(filepath2);

  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);

  const result = sortedKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (key in data1 && key in data2) {
      if (value1 === value2) {
        return null;
      }
      return   `- ${key}: ${value1}\n+ ${key}: ${value2}`;
    }
    
    if (key in data1) {
      return   `- ${key}: ${value1}`;
    }
    
    return   `+ ${key}: ${value2}`;
  }).filter(Boolean);
  return `{\n${result.join('\n')}\n}`;
};

program
  .name('gendiff')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const diff = genDiff(filepath1, filepath2);
    console.log(diff);
  });

program.on('--help', () => {
  console.log('');
  console.log('Examples:');
  console.log('  $ gendiff file1.json file2.json -f json');
});

program.parse(process.argv);