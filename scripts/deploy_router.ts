import { ethers } from "hardhat";

async function main() {
  const SwapRouter = await ethers.getContractFactory("SwapRouter");
  const router = await SwapRouter.deploy("0xB6C8B971650d96BD58c9Ba16DcFe685Bc1472e82", "0x4200000000000000000000000000000000000006");

  await router.deployed();

  console.log(`deployed to ${router.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});