#!/usr/bin/env bash

cd frontend
npm install
npm run build
cd ../backend
npm install
npm run prod
