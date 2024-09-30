#!/usr/bin/env node
import { Command } from "commander";
import parseJsonFile from "../src/parser.js";

const program = new Command();

program
  .name('gendiff')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const data1 = parseJsonFile(filepath1);
    const data2 = parseJsonFile(filepath2);

    console.log('Data from file 1:', data1);
    console.log('Data from file 2', data2);
  });

program.on('--help', () => {
  console.log('');
  console.log('Examples:');
  console.log('  $ gendiff file1.json file2.json -f json');
});

program.parse(process.argv);
