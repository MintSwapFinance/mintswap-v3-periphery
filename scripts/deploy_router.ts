import { ethers } from "hardhat";

async function main() {
  const SwapRouter = await ethers.getContractFactory("SwapRouter");
  const router = await SwapRouter.deploy("0x80126d780AE1595f7b934449DD0B32664082fe08", "0x4200000000000000000000000000000000000006");

  await router.deployed();

  console.log(`deployed to ${router.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});