#!/usr/bin/env node

time = setInterval(function() {
    var Web3 = require('./index.js');
    var web3 = new Web3();
    web3.setProvider(new web3.providers.httpProvider('http://localhost:8445'));
    var coinbase = web3.eth.coinbase;
    var balance  = web3.eth.getBalance(coinbase);
    var balance1 = web3.eth.getBalance(web3.eth.accounts[0]);
    var mongodb  = require('mongodb');
    var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/Blockchain';
    
    MongoClient.connect(url, function(err, db) {
        if( err ){
            console.log('Unable to connect to the MongoDB server');
        } else {
            var collection = db.collection('balance');
            var user1 = {
                name : web3.eth.accounts[1],
                balance : balance1.toString(10),
                date : new Date()
            };
        }
    });
    
}, 30000);