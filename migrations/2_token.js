const Token = artifacts.require("LinkToken");

module.exports = function(deployer) {
  deployer.deploy(Token);
};
