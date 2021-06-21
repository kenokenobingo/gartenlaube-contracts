"use strict";

const {
  toBN,
  unitPrice,
  remaining,
  UNITS,
  maximumChunks,
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
  OLToken,
} = require("../../utils/OZTestUtil.js");

const { checkBalance, isMember } = require("../../utils/TestUtils.js");

const myAccount = accounts[1];
const applicant = accounts[2];
const newMember = accounts[3];
const expectedGuildBalance = toBN("1200000000000000000");

describe("Adapter - Water", () => {
  const daoOwner = accounts[1];
  before("deploy dao", async () => {
    const { dao, adapters, extensions } = await deployDefaultDao({
      owner: myAccount,
    });
    this.dao = dao;
    this.adapters = adapters;
  });

  beforeEach(async () => {
    await revertChainSnapshot(this.snapshotId);
    this.snapshotId = await takeChainSnapshot();
  });

  it("should not be possible to trigger irrigation with a non-member address", async () => {
    const account2 = accounts[2];
    const dao = this.dao;
    const water = this.adapters.water;

    await expectRevert(water.triggerWatering(20, dao.address), "onlyMember");
  });

  it("should be possible to trigger irrigation with a member address", async () => {
    const account2 = accounts[2];
    const dao = this.dao;
    const water = this.adapters.water;

    await water.triggerWatering(20, dao.address, { from: daoOwner });

    const result = await water.getHumidity();

    expect(result).to.be.true;
  });
});
