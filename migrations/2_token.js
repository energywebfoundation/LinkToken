const Token = artifacts.require("LinkToken");
const LinkTokenSale = artifacts.require("LinkTokenSale");

module.exports = async function(deployer) {
  const args = process.argv.slice()
  const command = args[5]

  if (command == "sale") {
    await deployer.deploy(LinkTokenSale, 50, "0x74dd76E24B2CFB43C1b1a4498295d553D0843746", "0xe76d478383327b83eE0FE6b3F0ec675315340E18")
    return
  }

  await deployer.deploy(Token)
  await deployer.deploy(LinkTokenSale, 50, "0x74dd76E24B2CFB43C1b1a4498295d553D0843746", Token.address)
};
