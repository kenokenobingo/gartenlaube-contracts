"use strict"

const {
  toBN,
  unitPrice,
  remaining,
  UNITS,
  maximumChunks
} = require("../../utils/ContractUtil.js");

const {
  deployDefaultDao,
  takeChainSnapshot,
  revertChainSnapshot,
  advanceTime,
  accounts,
  expectRevert,
  expect,
  web3,
  OLToken
} = require("../../utils/OZTestUtil.js");

const { checkBalance, isMember } = require("../../utils/TestUtils.js");

const myAccount = accounts[1];
const applicant = accounts[2];
const newMember = accounts[3];
const expectedGuildBalance = toBN("1200000000000000000");

describe("Water", () => {
  before("deploy dao", async () => {
    const { dao, adapters, extensions } = await deployDefaultDao({
      owner: myAccount,
    });
    this.dao = dao
    this.adapters = adapters;
    this.extensions = extensions;
  });

  beforeEach(async () => {
    await revertChainSnapshot(this.snapshotId);
    this.snapshotId = await takeChainSnapshot();
  });

  it("should trigger irrigation", async () => {
    const dao = this.dao;
    const water = this.extensions.water;
  });
});
