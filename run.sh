#!/bin/bash

npm ci --silent
npm run build --silent
npm start --silent sample_input/input1.txt
npm start --silent sample_input/input2.txt
