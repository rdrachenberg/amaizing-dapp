pragma solidity ^0.4.24;

contract AmaizingDapp {
    mapping (string => bool) private names;

    function checkIfExists(string name) constant returns (bool) {
        return names[name];
    }

    function registerName(string name) {
        names[name] = true;
    }
}
