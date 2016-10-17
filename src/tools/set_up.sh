#!/bin/bash
cd ../..
rm -rf gen
mkdir gen
cp -r src gen
cp src/npm/package.json gen
cd gen
sudo npm install
