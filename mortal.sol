pragma solidity ^0.4.18;

contract Mortal {
    // Define a var with the user address;
    address owner;

    // Function is used during init, and set the contract owner.
    function Mortal() {
        owner = msg.sender;
    }

    function kill() {
        if (msg.sender==owner) {
            selfdestruct(owner);
        }
    }
}