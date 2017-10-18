var mytoken = artifacts.require("./mytoken.sol");

module.exports = function(deployer) {
  deployer.deploy(mytoken);
};
