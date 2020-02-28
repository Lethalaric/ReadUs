#!/bin/bash

cd ../ReadUsBackend;
chmod +x build.sh;
./build.sh;

cd ../readus-frontend;
npm run build;
chmod +x build.sh;
./build.sh;

cd ../orchestra;
docker-compose up -d;