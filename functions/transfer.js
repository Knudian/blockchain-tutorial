function transfer(sender, receiver, amount){
    var transaction = {
        from : sender,
        to: receiver,
        value : amount,
    };
    eth.sendTransaction(transaction);
}