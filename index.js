/**
 * Lib helpers to work with lambda hd keys and addresses from JS.
 */
'use strict';

exports.address = {};
exports.crypto  = {};
exports.publicKey={};
exports.privateKey={};
exports.keyStore={};

Object.assign(exports.address, require('./lib/address'));
Object.assign(exports.crypto,  require('./lib/crypto'));
Object.assign(exports.publicKey,  require('./lib/publicKey'));
Object.assign(exports.privateKey,  require('./lib/privateKey'));
Object.assign(exports.keyStore,  require('./lib/keyStore'));
