#!/usr/bin/env node

const chalk = require('chalk');
const commander = require('commander');
const inquirer = require('inquirer');
const packageJson = require('./package.json');

const { Command } = require('commander');
const program = new Command();

program.version(packageJson.version);

program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza')
  .action((options, command) => {
    console.log('options :>> ', options);
  });

program.parse(process.argv)
