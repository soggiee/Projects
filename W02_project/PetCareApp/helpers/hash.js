const crypto = require('crypto');

module.exports = function sha256Hash(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
};
