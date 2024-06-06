import { ethers } from "hardhat";

async function main() {
  const PositionValueHelper = await ethers.getContractFactory("PositionValueHelper");
  const pvh = await PositionValueHelper.deploy();

  await pvh.deployed();

  console.log(`deployed to ${pvh.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});