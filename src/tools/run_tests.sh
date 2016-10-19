#!/bin/bash
cp ../npm/gulpfile.js ../../gen
cd ../../gen
node_modules/.bin/gulp copy
node_modules/.bin/gulp test
