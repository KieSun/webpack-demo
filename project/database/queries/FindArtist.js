const _ = require('lodash');
const Artist = require('../seeds/artist');
const db = require('./db');

/**
 * Finds a single artist in the artist collection.
 * @param {string} _id - The ID of the record to find.
 * @return {promise} A promise that resolves with the Artist that matches the id
 */
module.exports = (_id) => {
  const artist = _.find(db, a => a._id === _id);

  return new Promise((resolve, reject) => {
    resolve(artist);
  });
};
