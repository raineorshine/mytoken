var mytoken = artifacts.require("./mytoken.sol")

contract('mytoken', function(accounts) {

  it("should mint 50000 to each person upon creation", function() {
    return mytoken.deployed().then(function(instance) {
      return instance.balanceB.call()
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 50000, "50000 wasn't in the first account")
    })
  })

})
