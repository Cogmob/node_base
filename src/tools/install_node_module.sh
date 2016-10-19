#!/bin/bash
cd ../../gen
sudo npm install --save-dev $1
cp package.json ../src/npm
