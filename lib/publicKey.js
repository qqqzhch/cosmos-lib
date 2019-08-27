var Amino =require('@jswebfans/irisnet-crypto/chains/iris/amino.js')
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
Amino.RegisterConcrete(null,'tendermint/PubKeySecp256k1');

/**
 * Get Cosmos address (bech32) from public key.
 *
 * @param  {Buffer} publicKey Public key
 * @return {String}           Bech32 address
 */
exports.getPublicKey = function getAddress(publicKey) {
    var PubKeyAmino = Amino.MarshalBinary('tendermint/PubKeySecp256k1',  publicKey);

    const words   = bech32.toWords(PubKeyAmino);

    return bech32.encode(PREFIX, words);
};



/**
 * Get bytes from Cosmos address.
 *
 * @param  {String} publicKeybech32 Cosmos bech32 publicKey.
 * @return {Buffer}         Buffer  bytes from publicKey.
 */
function getBytes(publicKeybech32) {
    const decoded = bech32.decode(publicKeybech32);

    var publicKeyAmino = Buffer.from(bech32.fromWords(decoded.words));
    var publicKey =  Amino.unMarshalBinary('tendermint/PubKeySecp256k1', publicKeyAmino);
    return publicKey
}


exports.getBytes            = getBytes;







