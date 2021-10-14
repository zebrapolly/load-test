## What is it?

It's an education project. I want to learn performance technics 
and check efficiency on simple ecommerce service.

## That service should do

- authorization
- searching products
- putting product to card

### Pitfalls
I store same data in different places(products and users logins in
root folder and in api folder. I need these datasets as a storaged 
information and sets for the testing), because of conternization 
and docker-compose context. I'll fix it when I start to use 
databases with migrations and create more advanced infrastructure 
approaches.

## How I test

I use [k6.io](https://k6.io/) for creating and evaluating test scenarios.
All results are storaged in influxds with grafana ui.
In this step testing starts with next steps:
 1. Start service `cd api && nm run start:dev`
 2. Start db and ui fot test results `docker-compose up -d influxdb grafana `
 3. Start test `k6 run --out influxdb=http://localhost:8086/k6 scripts/search-and-add-to-cart.js` (you should install k6)

### Grafana
http://localhost:3001/
user root
pass root

## What technics I want to learn
- database performance improvements
- caching
- scaling services
- cqrs
- http/2 - http/1

