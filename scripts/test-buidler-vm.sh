#!/usr/bin/env bash

node_modules/@nomiclabs/buidler/internal/cli/cli.js --verbose --show-stack-traces --version

# node --inspect-brk --expose-gc --inspect=9222 node_modules/@nomiclabs/buidler/internal/cli/cli.js --verbose --show-stack-traces test "$@"
node node_modules/@nomiclabs/buidler/internal/cli/cli.js --verbose --show-stack-traces test "$@"
