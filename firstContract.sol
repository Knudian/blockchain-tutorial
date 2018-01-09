pragma solidity ^0.4.18;

contract FirstContract {
    // <type> [modifier] <name>, like : (default modifier is 'private')
    // int private variableName;

    uint public timeLastBet;
    uint public timeNextBet;

    uint _interval;
    address _contractCreator;

    enum BetType { Odds, Even, Side }

    struct Bet {
        BetType betType;
        address player;
        uint value;
    }

    Bet[] public betList;

    // event <eventName> ( <type> param1, <type> param2 )
    event Finished (uint amount, uint timeNextBet);

    // function <functionName> ( <type> param1, <type> param2 ) {}

}