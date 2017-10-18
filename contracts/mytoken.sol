pragma solidity ^0.4.15;

contract MyToken {

  address public personA;
  address public personB;
  uint public balanceA;
  uint public balanceB;

  // constructor
  // called when contract is deployed
  function MyToken() {

    // mint tokens
    // give 1/2 to A and 1/2 to B
    balanceA = 100000;
    personA = msg.sender;
  }

  function assignPersonB(address newPerson) {
    if (msg.sender != personA) revert();

    personB = newPerson
  }

}
