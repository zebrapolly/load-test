CREATE DATABASE ecommerce;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE USER ecomm_app_test WITH PASSWORD 'ecomm_app_test';
GRANT ALL PRIVILEGES ON DATABASE "ecommerce" to ecomm_app_test;