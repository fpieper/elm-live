#! /usr/bin/env node

const flags = require('minimist')(process.argv.slice(2), {boolean: true});
const files = flags._;

// Print usage
if (flags.h) process.stdout.write(require('./help/usage'));
if (flags.help) process.stdout.write([
  require('./help/synopsis'),
  require('./help/what-it-does'),
  require('./help/options'),
].join('\n\n'));

// Exit early
if (flags.h || flags.help) process.exit(0);

// TODO