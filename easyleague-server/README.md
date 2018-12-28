# easyleague - server
  NodeJS express project 

## Requirements
- NodeJS
- ElasticSearch

## Setting up environment
Run `npm install`. Make sure elasticsearch is running in your machine. Then run `npm run setUpDb` to set up the local database with dummy data.

Navigate to `http://localhost:9200/_cat/indices?pretty` to verify that elasticsearch db has been created.

## Development server
Run `npm run start` to start server. 

## Build

Run `npm run build` to build the project. 
