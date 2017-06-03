const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);
const pg = require('pg');

knex('owners');
knex('dogs');
knex('breeds');
knex('breeders');
