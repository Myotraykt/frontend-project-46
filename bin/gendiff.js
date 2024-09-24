#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program.version('1.0.0');

program
  .arguments('filepath1 filepath2')
  .description('Compares two configuration files and shows a difference')
  .option('--f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    console.log(`Comparing ${filepath1} and ${filepath2}`);
  });

program.parse(process.argv);

if (program.args.length < 2) {
  console.log('Error: Two file paths are required');
  program.help();
}

export default function genDiff(filepath1, filepath2) {

}
