const crypto = require('crypto');

// Gerar senha forte com 40 caracteres
const strongPassword = crypto.randomBytes(20).toString('hex');

module.exports = strongPassword;
