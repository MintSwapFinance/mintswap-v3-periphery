import { ethers } from "hardhat";

async function main() {
  const QuoterV2 = await ethers.getContractFactory("QuoterV2");
  const quoterV2 = await QuoterV2.deploy("0x1f88BB455E02646224A0a65f3eb4B2FCb4fb8e49", "0x4200000000000000000000000000000000000006");

  await quoterV2.deployed();

  console.log(`deployed to ${quoterV2.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});