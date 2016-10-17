#!/bin/bash
cp -rf ~/node_base/src ~/node_base/gen
cd ~/node_base/gen
node_modules/.bin/babel-node repl_test.js
