/**
 * Lib helpers to work with cosmos keys and addresses from JS.
 */
'use strict';

exports.address = {};
exports.crypto  = {};
exports.publicKey={};
exports.privateKey={};

Object.assign(exports.address, require('./lib/address'));
Object.assign(exports.crypto,  require('./lib/crypto'));
Object.assign(exports.publicKey,  require('./lib/publicKey'));
Object.assign(exports.privateKey,  require('./lib/privateKey'));
