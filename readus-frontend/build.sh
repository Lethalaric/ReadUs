#!/bin/bash

docker build -t readus-frontend . && docker tag readus-frontend:latest mukhtarharis/readus-frontend:latest && docker push mukhtarharis/readus-frontend:latest