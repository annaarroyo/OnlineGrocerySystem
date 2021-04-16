# grocery-delivery.me
http://www.grocery-delivery.me/

To begin, first clone the project.

## Dependency Installation

To install dependencies for the server, use the following command:

`npm install`

To install dependencies for the client, use the following command:

`npm install --prefix client`

## Running the Application

To the client and server concurrently, use the following command:

`npm run dev`

### Server

To run the server (by itself), use the following command:

`npm run server`

This will serve to port `5000`.

### Client 

To run the client (by itself), use the following command:

`npm start --prefix client`

This runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000).

## Heroku Deployment 
We host our application on a heroku server with a custom domain name.

Our Heroku app [https://grocery-delivery-system-group1.herokuapp.com/](https://grocery-delivery-system-group1.herokuapp.com/).

Our custom domain [http://www.grocery-delivery.me](ttp://www.grocery-delivery.me).

Everytime code is pushed to this repository, the updates will automatically get deployed to our website.

To view the domains associated with our application, use the following command:

`heroku domains`

To view stream of the most recent logs, use the following command:

`heroku logs --tail`

