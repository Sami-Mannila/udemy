const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
const { abi, evm } = require("./compile");

const provider = new HDWalletProvider(
  "pepper demise rival grab business garbage among basket flock bomb trash tonight", // This is account mnemonic of a dev account. Never add real account mnemonic here.
  "https://sepolia.infura.io/v3/0ac53c58d20a4997a844eeadcf996413"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(abi))
    .deploy({ data: evm.bytecode.object, arguments: ["Hi there!"] })
    .send({ from: accounts[0], gas: "1000000" });

  console.log("Contract deployed to", result.options.address);
  // At termination, `provider.engine.stop()' should be called to finish the process elegantly.
  provider.engine.stop();
};
deploy();
