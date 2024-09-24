#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference')
  .option('--h, --help', 'output usage informtaion')

program.parse(process.argv);

if (program.opts().help) {
    program.outputHelp();
}

export default function genDiff(filepath1, filepath2) {

}
