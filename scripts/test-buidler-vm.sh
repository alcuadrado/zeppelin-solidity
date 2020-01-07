#!/usr/bin/env bash

node node_modules/@nomiclabs/buidler/internal/cli/bootstrap.js --verbose --show-stack-traces --version

node node_modules/@nomiclabs/buidler/internal/cli/bootstrap.js --verbose --show-stack-traces test "$@"
# node node_modules/@nomiclabs/buidler/internal/cli/cli.js --verbose --show-stack-traces test "$@"
