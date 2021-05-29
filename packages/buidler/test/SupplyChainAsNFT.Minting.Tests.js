const {
  catchRevert
} = require("./exceptionsHelper");

const {
  emptyAddress
} = require("./sharedFunctions");

const SupplyChainAsNFT = artifacts.require("SupplyChainAsNFT");

describe("SupplyChainAsNFT tests", function () {
  let accounts;
  let supplyChainAsNFTInstance;
  before(async function () {
    accounts = await web3.eth.getAccounts();
  });
  describe("Deployment and ownership", function () {

    it("Should deploy my SupplyChainAsNFT", async function () {
      supplyChainAsNFTInstance = await SupplyChainAsNFT.new("test", "test");
    });

    describe("Can set token limit", function () {
      it("Sets token limit", async function () {
        var response = await supplyChainAsNFTInstance.setTokenLimit(3);
      });
    });

    // set once above
    describe("Can't mint more than the limit", function () {
      it("mints once", async function () {
        await supplyChainAsNFTInstance.mint(accounts[0]);
      });
      it("mints twice", async function () {
        await supplyChainAsNFTInstance.mint(accounts[0]);
      });
      it("mints three times", async function () {
        await supplyChainAsNFTInstance.mint(accounts[0]);
      });
      it("can't mint four", async function () {
        await catchRevert(supplyChainAsNFTInstance.mint(accounts[0]));
      });
    });

  });

});
