#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/index.js';
import _ from 'lodash';

const program = new Command();

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