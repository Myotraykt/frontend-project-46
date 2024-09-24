import { Command } from 'commander';
import parseJsonFile from './parser.js';

const program = new Command();

program
  .version('')
  .arguments('<filepath1 filepath2>')
  .action((filepath1, filepath2) => {
    const data1 = parseJsonFile(filepath1);
    const data2 = parseJsonFile(filepath2);

    console.log('Data from file 1:', data1);
    console.log('Data from file 2:', data2);
  });

program.parse(process.argv);
