#!/bin/bash
cp ../npm/gulpfile.js ../../gen
cd ../../gen
gulp copy
gulp test
