var cosPubKey   = require('./publicKey.js')
var cosaddress   = require('./address.js')
var cosprivateKey   = require('./privateKey.js')


exports.toJson= function (keys,password,name){
    var cospublicKey=cosPubKey.getPublicKey(keys.publicKey);
    var address = cosaddress.getAddress(keys.publicKey);
    var walletjson=cosprivateKey.ExportprivateKey(keys.privateKey,password)

    walletjson.name = name;
    walletjson.address= address;
    walletjson.salt=walletjson.salt.toString('base64');
    walletjson.pravteKey=walletjson.pravteKey.toString('base64');
    walletjson.publicKey=cospublicKey;
    return walletjson;

}


exports.checkJson=function(walletjson,password){
    var pravteKey = Buffer.from(walletjson.pravteKey,'base64')  
    var salt = Buffer.from(walletjson.salt,'base64');
    return cosprivateKey.importPrivateKey(pravteKey,salt,password)

}

exports.jsonToWallet=function(walletjson,password){
    

}
