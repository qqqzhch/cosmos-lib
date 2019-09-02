'use strict';

require('chai').should();

const cosmos = require('../index.js');

const ADDRESS    = 'lambda163q4m634nq8les4nuvdvz49tk6aeh926t0ccsc';
const BYTES_HEX  = 'd4415dea35980ffcc2b3e31ac154abb6bb9b955a';
const BYTES32_HEX = BYTES_HEX + Buffer.alloc(12).toString('hex');
const PUBLIC_KEY  = '03c5c007170a8b46d7e8ffcaec26a27cf26f7e4fe94ab7f813b98133bc95f3d651';
const bench32Publikey='lambdapub1addwnpepq0zuqpchp295d4lgll9wcf4z0nex7lj0a99t07qnhxqn80y470t9zhrhpn6'


describe('lib/publicKey', () => {
    let bytes;
    let bytes32;

    it('Should get bench32 public key from public key bytes', () => {
        const value = cosmos.publicKey.getPublicKey(Buffer.from(PUBLIC_KEY, 'hex'));
        value.should.be.equal(bench32Publikey);
    });

    it('Should get public key bytes   key from bench32 public', () => {
        const value = cosmos.publicKey.getBytes(bench32Publikey).toString('hex');
        value.should.be.equal(PUBLIC_KEY);
    });

});