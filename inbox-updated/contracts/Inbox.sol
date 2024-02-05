// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

// linter warnings (red underline) about pragma version can igonored!

// contract code will go here

contract Inbox {
    string public message;

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }

    function doMath(int a, int b) {
        a + b;
        a - b;
        a * b;
        a == b;
    }
}
