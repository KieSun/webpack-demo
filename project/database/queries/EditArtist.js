const _ = require('lodash');
const Artist = require('../seeds/artist');
const db = require('./db');

/**
 * Edits a single artist in the Artists collection
 * @param {string} _id - The ID of the artist to edit.
 * @param {object} artistProps - An object with a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves when the record is edited
 */
module.exports = (_id, artistProps) => {
  const artist = _.find(db, a => a._id === _id);
  _.extend(artist, artistProps);

  return new Promise((resolve, reject) => {
    resolve();
  });
};
