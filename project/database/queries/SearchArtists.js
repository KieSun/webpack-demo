const _ = require('lodash');
const Artist = require('../seeds/artist');
const db = require('./db');

/**
 * Searches through the Artist collection
 * @param {object} criteria An object with a name, age, and yearsActive
 * @param {string} sortProperty The property to sort the results by
 * @param {integer} offset How many records to skip in the result set
 * @param {integer} limit How many records to return in the result set
 * @return {promise} A promise that resolves with the artists, count, offset, and limit
 */
module.exports = (_criteria, sortProperty, offset = 0, limit = 20) => {
  const criteria = _.extend({
    age: { min: 0, max: 100 },
    yearsActive: { min: 0, max: 100 },
    name: ''
  }, _criteria);

  const artists = _.chain(db)
    .filter(a => _.includes(_.lowerCase(a.name), _.lowerCase(criteria.name)))
    .filter(a => a.age > criteria.age.min && a.age < criteria.age.max)
    .filter(a => a.yearsActive > criteria.yearsActive.min && a.yearsActive < criteria.yearsActive.max)
    .sortBy(a => a[sortProperty])
    .value()

  return new Promise((resolve, reject) => {
    resolve(artists);
  });
};
