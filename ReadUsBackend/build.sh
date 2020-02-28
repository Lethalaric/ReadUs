#!/bin/bash

docker build -t readus-backend . && docker tag readus-backend:latest mukhtarharis/readus-backend:latest && docker push mukhtarharis/readus-backend:latest
