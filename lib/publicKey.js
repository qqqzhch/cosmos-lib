/**
 * Lib helps to work with Cosmos addresses.
 *
 * @module lib/address
 */
'use strict';

const bech32    = require('bech32');
const ripemd160 = require('ripemd160');
const crypto    = require('crypto');

/**
 * @const Zeros buffer, using to have compability with bytes32.
 *
 * @type {Buffer}
 * @default
 */
const ZEROS = Buffer.alloc(12);

/**
 * @const Cosmos bech32 address prefix.
 *
 * @type    {String}
 * @default
 */
const PREFIX = 'lambdapub';

/**
 * Get Cosmos address (bech32) from public key.
 *
 * @param  {Buffer} publicKey Public key
 * @return {String}           Bech32 address
 */
exports.getPublicKey = function getAddress(publicKey) {

    const words   = bech32.toWords(publicKey);

    return bech32.encode(PREFIX, words);
};

exports.getPublicKeyByPravteKey = function getAddress(publicKey) {

    const words   = bech32.toWords(publicKey);

    return bech32.encode(PREFIX, words);
};



/**
 * Get bytes from Cosmos address.
 *
 * @param  {String} address Cosmos bech32 address.
 * @return {Buffer}         Buffer contains 20 bytes from address.
 */
function getBytes(address) {
    const decoded = bech32.decode(address);

    return Buffer.from(bech32.fromWords(decoded.words));
}

/**
 * Get Cosmos address from bytes.
 *
 * @param  {Buffer} bytes Bytes of address.
 * @return {String}       Cosmos address.
 */
function getAddressFromBytes(bytes) {
    return bech32.encode(PREFIX, bech32.toWords(bytes));
}

exports.getBytes            = getBytes;
exports.getAddressFromBytes = getAddressFromBytes;






