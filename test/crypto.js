/**
 * Crypto lib tests.
 */
'use strict';

require('chai').should();

const LAMBHDKEY = require('../index.js');
const crypto = require('crypto');

const MNEMONIC    = 'soccer sort make soon family buyer merry dash major winner emerge peace zone drastic yellow sound razor void angry weasel vehicle afford toe sing';
const PUBLIC_KEY  = '03c5c007170a8b46d7e8ffcaec26a27cf26f7e4fe94ab7f813b98133bc95f3d651';
const PRIVATE_KEY = 'd95debc02958f4174a0dd105bfe078ce0961ae0b3a3d5b9d1b51e7d70b3a8ae1';

describe('lib/crypto', () => {
    let keys;
    let signature;

    const bytes = crypto.randomBytes(12);
    const json  = {
        data: crypto.randomBytes(128)
    };

    it('Should generate keys from mnemonic', () => {
        keys = LAMBHDKEY.crypto.getKeysFromMnemonic(MNEMONIC);

        keys.publicKey.toString('hex').should.equal(PUBLIC_KEY);
        keys.privateKey.toString('hex').should.equal(PRIVATE_KEY);
    });

    it('Should sign bytes with private key', () => {
        signature = LAMBHDKEY.crypto.sign(bytes, keys.privateKey);
        signature.length.should.be.equal(64);
    });

    it('Should verify signature', () => {
        const verify = LAMBHDKEY.crypto.verify(bytes, signature, keys.publicKey);
        verify.should.be.true;
    });

    it('Should sign JSON with private key', () => {
        signature = LAMBHDKEY.crypto.signJson(json, keys.privateKey);
        signature.length.should.be.equal(64);
    });

    it('Should verify signature on JSON', () => {
        const verify = LAMBHDKEY.crypto.verifyJson(json, signature, keys.publicKey);
        verify.should.be.true;
    });

    it('Should reject wrong signature', () => {
        const verify = LAMBHDKEY.crypto.verifyJson(json, crypto.randomBytes(64), keys.publicKey);
        verify.should.be.false;
    });
});
