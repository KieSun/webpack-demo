const _ = require('lodash');
const Artist = require('../seeds/artist');
const db = require('./db');

/**
 * Sets a group of Artists as not retired
 * @param {array} _ids - An array of the _id's of of artists to update
 * @return {promise} A promise that resolves after the update
 */
module.exports = (_ids) => {
  return new Promise((resolve, reject) => {
    const artists = _.chain(_ids)
      .map(_id => _.find(db, a => a._id === _id))
      .tap(ids => console.log(ids))
      .compact()
      .each(a => a.retired = false)
      .value();

    resolve();
  });
};
