# ReadUs

## Content Section
1. ReadUs frontend application
2. ReadUs backend application
3. orchestration
4. database

## ReadUs frontend application
ReadUs frontend is built under vueJS. Its purpose is to serve UI web application to user. Best way to use this application is with latest browser (not IE).  
Default url : http://localhost:8088  
Function that contains in this application :
1. add new reading plan
2. list of books with progress bar
3. detail of the book
4. updating daily read progress

## ReadUs backend application
ReadUs backend is built under expressJS. Its purpose is to serve json like data. Best way to use this application is with postman.  
Default url : http://localhost:3000  
Function that contains in this application :
1. mysql database with sequelize
2. insert new data => insert new reading plan
3. update data => update daily progress
4. get all progress
5. get book detail

## Orchestration
Orchestration is where main scripts are. Its purpose is to serve ease your way to setup ReadUs.  
What contains in this folder :
1. docker-compose.yml
2. database dump
3. build ReadUs

## Database
Mysql is used as database for ReadUs. There is no specific purpose why mysql except free, easy to use, common and general.

## Installation Guide
### Docker Guide
This guide is for pc that already have docker and docker-compose.  
How to run :
1. goto orchestra folder
2. do docker compose command
```
docker-compose up -d
```
3. open http://localhost:8088 (or equal to it) in your browser
### Non-docker guide
This guide is for pc that not have docker and docker-compose. This command is for linux base OS.  
How to run :
1. update the OS
```
apt-get update -y && apt-get upgrade -y
```
2. install nodeJS, expressJS, vueJS
```
// install nodeJS and npm
apt-get install curl -y
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
apt-get install nodejs -y
npm -v && node -v

// install expressJS
npm install -g express-generator

// install vueJS
npm install -g @vue/cli
vue --version
```
3. install mysql and mysql workbench (or equal to it)
```
// install mysql
apt-get update -y && apt-get upgrade -y
apt-get install mysql-server
systemctl start mysql
systemctl enable mysql

// install mysql workbench (anything else, use google)
apt-get update -y && apt-get upgrade -y
apt-get install mysql-workbench -y
```
4. import database from orchestra folder
```
mysql -uMYSQL_USERNAME -pMYSQL_PASSWORD < ./orchestra/dumps/all-databases.sql
```
5. run ReadUs backend application
```
cd ./ReadUsBackend
npm start
```
6. run ReadUs frontend application
```
cd ./readus-frontend
npm run serve
```
7. open http://localhost:8088 (or equal to it) in your browser
8. hope everything is fine. Don't like this sentence? install docker then :)
## Next update or upgrade
1. vueJS websocket
2. changing APIs requests and params
3. remove cors
4. redesign UI/UX
5. securing APIs data
6. removing unused console log
7. deploy ready env to server