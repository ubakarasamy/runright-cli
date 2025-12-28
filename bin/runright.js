#!/usr/bin/env node
import { program } from 'commander';
import { runCommand } from '../src/run.js';

program
  .name('runright')
  .description('RunRight QA CLI')
  .version('0.0.1');

program
  .command('run')
  .requiredOption('-p, --project <id>', 'Project ID')
  .option('-e, --env <env>', 'Environment', 'staging')
  .action(runCommand);

program.parse();
