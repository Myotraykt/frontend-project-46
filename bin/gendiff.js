#!/usr/bin/env node
import { Command } from "commander";

const program = new Command();

program
  .name('gendiff')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    console.log(`Comparing ${filepath1} and ${filepath2}`);
  });

program.on('--help', () => {
  console.log('');
  console.log('Examples:');
  console.log('  $ gendiff file1.json file2.json -f json');
});

program.parse(process.argv);
