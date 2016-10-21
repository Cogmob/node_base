#!/bin/bash
cp ../npm/gulpfile.js ../../gen
cd ../../gen
node_modules/.bin/gulp copy
clear
node_modules/.bin/tape src/**/*test.js
